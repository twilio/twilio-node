"use strict";

import { FlowInstance } from "./lib/rest/studio/v2/flow";
jest.setTimeout(15000);

const twilio = require("./lib/index.js");
const localtunnel = require("localtunnel");
const http = require("http");

const authToken = process.env.TWILIO_AUTH_TOKEN;
const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const testClient = twilio(apiKey, apiSecret, { accountSid });

describe("Validating Incoming Twilio Request", () => {
  let tunnel;
  let flowSid;
  let validationServer;
  let portNumber = 7777;
  let validationCount = 0; //workaround to ensure validation server receives requests (due to localtunnel connections issue)

  beforeAll(async () => {
    validationServer = await http.createServer((req, res) => {
      validationCount++;
      let url =
        req.headers["x-forwarded-proto"] +
        "://" +
        req.headers["host"] +
        req.url;
      let signatureHeader = req.headers["x-twilio-signature"];
      let body = "";
      req.on("data", (chunk: string) => {
        body += chunk;
      });

      req.on("end", () => {
        let params = new URLSearchParams(body);
        let paramObject = Object.fromEntries(params.entries());
        let requestIsValid = twilio.validateRequest(
          authToken,
          signatureHeader,
          url,
          paramObject
        );
        expect(requestIsValid).toBeTruthy();
      });
    });
    validationServer.listen(portNumber);
    tunnel = await localtunnel({ port: portNumber });
  });

  afterAll(() => {
    tunnel.close();
    validationServer.close();
  });

  afterEach(() => {
    testClient.studio.v2.flows(flowSid).remove();
  });

  function CreateStudioFlow(
    url: string,
    method: string
  ): Promise<FlowInstance> {
    return testClient.studio.v2.flows.create({
      friendlyName: "Node Cluster Test Flow",
      status: "published",
      definition: {
        description: "Studio Flow",
        states: [
          {
            name: "Trigger",
            type: "trigger",
            transitions: [
              {
                next: "httpRequest",
                event: "incomingRequest",
              },
            ],
            properties: {},
          },
          {
            name: "httpRequest",
            type: "make-http-request",
            transitions: [],
            properties: {
              method: method,
              content_type: "application/x-www-form-urlencoded;charset=utf-8",
              url: url,
            },
          },
        ],
        initial_state: "Trigger",
        flags: {
          allow_concurrent_calls: true,
        },
      },
    });
  }

  async function validateRequest(method: string) {
    let flow = await CreateStudioFlow(tunnel.url, method);
    flowSid = flow.sid;
    await testClient.studio.v2
      .flows(flowSid)
      .executions.create({ to: "to", from: "from" });
    await new Promise((resolve) => setTimeout(resolve, 5000));
  }

  test("Should validate GET request", async () => {
    await validateRequest("GET");
    expect(validationCount).toBe(1);
  });

  test("Should validate POST request", async () => {
    await validateRequest("POST");
    expect(validationCount).toBe(2);
  });
});
