'use strict';

import {FlowInstance} from "./lib/rest/studio/v2/flow";
jest.setTimeout(10000);

const twilio = require('./lib/index.js');
const http = require('http');
const localtunnel = require('localtunnel');

const fromNumber = process.env.TWILIO_FROM_NUMBER;
const toNumber = process.env.TWILIO_TO_NUMBER;
const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN
const testClient = twilio(apiKey, apiSecret, {accountSid});

afterAll(async () => {
  await new Promise(resolve => setTimeout(resolve, 5000))
})

test("Should send a Text", () => {
  return testClient.messages.create({
    body: "hello world",
    to: toNumber,
    from: fromNumber,
  }).then(msg => {
    expect(msg.sid).not.toBeUndefined();
    expect(msg.to).toBe(toNumber);
    expect(msg.from).toBe(fromNumber);
    expect(msg.body).toBe("hello world")
  })
})

test("Should list incoming numbers", () => {
  return testClient.incomingPhoneNumbers
    .list()
    .then(incomingPhoneNumbers => {
      expect(incomingPhoneNumbers).not.toBeNull();
      expect(incomingPhoneNumbers.length).toBeGreaterThanOrEqual(2);
    })
})

test("Should list a incoming number", () => {
  return testClient.incomingPhoneNumbers
    .list({limit: 1})
    .then(incomingPhoneNumbers => {
      expect(incomingPhoneNumbers).not.toBeUndefined();
      expect(incomingPhoneNumbers.length).toEqual(1);
    })
})

test("Should allow special characters for friendly and identity name", async () => {
  const friendlyName = 'service|friendly&name'
  const identityName = 'user|identity&string'
  const conversation = await testClient.conversations.v1.conversations
    .create({friendlyName: friendlyName})
  const participant = await testClient.conversations.v1.conversations(conversation.sid)
    .participants
    .create({identity: identityName})

  expect(conversation).not.toBeNull();
  expect(participant).not.toBeNull();
  expect(conversation.friendlyName).toBe(friendlyName)
  expect(participant.identity).toBe(identityName)

  const removeConversation = await testClient.conversations.v1.conversations(conversation.sid)
    .remove();

  expect(removeConversation).toBeTruthy();
})

describe('Validating Request', function () {
  let tunnel;
  let flowSid;
  let validationServer;
  let portNumber = 7777;
  let count = 0;
  beforeAll(async () => {
    validationServer = await http.createServer((req, res) => {
      let url = req.headers["x-forwarded-proto"] + "://" + req.headers["host"] + req.url
      let signatureHeader = req.headers["x-twilio-signature"]
      let body = "";
      req.on("data", (chunk: string) => {
        body += chunk;
      });

      req.on("end", () => {
        let params = new URLSearchParams(body);
        let paramObject = Object.fromEntries(params.entries());
        let requestIsValid = twilio.validateRequest(authToken, signatureHeader, url, paramObject)
        console.log("validating request")
        expect(requestIsValid).toBeTruthy();
      });
    });

    validationServer.listen(portNumber);
    console.log("server listening to port")
    console.log("setting up localtunnel")
    tunnel = await localtunnel({port: portNumber, subdomain:'twilio-node-cluster-test'});
    tunnel.on('error', (er) => console.log("err: ", ++count, " => ", er))
    console.log(tunnel.url)
  });

  afterAll(() => {
    tunnel.close();
    testClient.studio.v2.flows(flowSid).remove();
    validationServer.close();
  });

  function CreateStudioFlow(url: string, method: string): Promise<FlowInstance> {
    return testClient.studio.v2.flows.create({
      friendlyName: 'Node Cluster Test Flow',
      status: 'published',
      definition: {
        description: 'Studio Flow',
        states: [
          {
            name: 'Trigger',
            type: 'trigger',
            transitions: [{
              "next": "httpRequest",
              "event": "incomingRequest"
            }],
            properties: {}
          }, {
            name: "httpRequest",
            type: "make-http-request",
            transitions: [],
            properties: {
              method: method,
              content_type: "application/x-www-form-urlencoded;charset=utf-8",
              url: "https://twilio-node-cluster-test.loca.lt"
            }
          }
        ],
        initial_state: 'Trigger',
        flags: {
          allow_concurrent_calls: true
        }
      }
    })
  }

  async function validateRequest(method: string) {
    let flow = await CreateStudioFlow(tunnel.url, method);
    flowSid = flow.sid;
    await testClient.studio.v2.flows(flowSid)
      .executions
      .create({to: 'to', from: 'from'});
    await new Promise(resolve => setTimeout(resolve, 5000))
  }

  test("Should validate incoming GET request", async () => {
    await validateRequest('GET');
  })

  test("Should validate incoming POST request", async () => {
    await validateRequest('POST');
  })
});

test("Should list available numbers", () => {
  return testClient.availablePhoneNumbers('US')
    .tollFree
    .list({limit: 2})
    .then(tollFree => {
      expect(tollFree).not.toBeNull();
      expect(tollFree.length).toEqual(2);
    });
})
