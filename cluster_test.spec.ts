"use strict";

jest.setTimeout(15000);

import twilio from "./lib/";

const fromNumber = process.env.TWILIO_FROM_NUMBER;
const toNumber = process.env.TWILIO_TO_NUMBER;
const apiKey = process.env.TWILIO_API_KEY;
const apiSecret = process.env.TWILIO_API_SECRET;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const testClient = twilio(apiKey, apiSecret, { accountSid });
const twiml = new twilio.twiml.VoiceResponse();

test("Should send a text", () => {
  return testClient.messages
    .create({
      body: "hello world",
      to: toNumber,
      from: fromNumber,
    })
    .then((msg) => {
      expect(msg.sid).not.toBeUndefined();
      expect(msg.to).toBe(toNumber);
      expect(msg.from).toBe(fromNumber);
      expect(msg.body).toBe("hello world");
    });
});

test("Should list incoming numbers", () => {
  return testClient.incomingPhoneNumbers.list().then((incomingPhoneNumbers) => {
    expect(incomingPhoneNumbers).not.toBeNull();
    expect(incomingPhoneNumbers.length).toBeGreaterThanOrEqual(2);
  });
});

test("Should list a incoming number", () => {
  return testClient.incomingPhoneNumbers
    .list({ limit: 1 })
    .then((incomingPhoneNumbers) => {
      expect(incomingPhoneNumbers).not.toBeUndefined();
      expect(incomingPhoneNumbers.length).toEqual(1);
    });
});

test("Should allow special characters for friendly and identity name", async () => {
  const friendlyName = "service|friendly&name";
  const identityName = "user|identity&string";
  const conversation = await testClient.conversations.v1.conversations.create({
    friendlyName: friendlyName,
  });
  const participant = await testClient.conversations.v1
    .conversations(conversation.sid)
    .participants.create({ identity: identityName });

  expect(conversation).not.toBeNull();
  expect(participant).not.toBeNull();
  expect(conversation.friendlyName).toBe(friendlyName);
  expect(participant.identity).toBe(identityName);

  const removeConversation = await testClient.conversations.v1
    .conversations(conversation.sid)
    .remove();

  expect(removeConversation).toBeTruthy();
});

test("Should list available numbers", () => {
  return testClient
    .availablePhoneNumbers("US")
    .tollFree.list({ limit: 2 })
    .then((tollFree) => {
      expect(tollFree).not.toBeNull();
      expect(tollFree.length).toEqual(2);
    });
});

test("Should call with twiml string", () => {
    return testClient.calls.create({
        twiml: twiml.toString(),
        to: toNumber,
        from: fromNumber,
    }).then(call => expect(call.sid).toBeDefined())
})

test("Should call with twiml object", () => {
    return testClient.calls.create({
        twiml: twiml,
        to: toNumber,
        from: fromNumber,
    }).then(call => expect(call.sid).toBeDefined())
})
