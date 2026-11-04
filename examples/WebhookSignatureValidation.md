# Validating webhook signatures (HMAC-SHA1 and HMAC-SHA256)

By default Twilio signs webhooks with your Auth Token using HMAC-SHA1. If a
[Webhooks Rule](https://www.twilio.com/docs/usage/webhooks/webhook-rules) matches the webhook URL, Twilio signs
with the Setting's SharedKey and algorithm instead, and adds this header:

```
X-Twilio-Webhooks-Signature-Settings: key=<sharedKeyId>,algorithm=HMAC_SHA256
```

Only the hash changes. The signed string is still the full URL followed by the sorted POST parameters.

## Option 1: Express middleware

`twilio.webhook()` reads the header for you. Pass the SharedKey secret next to the Auth Token:

```js
const twilio = require("twilio");

app.post(
  "/voice",
  twilio.webhook(authToken, { sharedKeySecret }),
  (req, res) => {
    // Only genuine Twilio requests reach this handler
    res.type("text/xml").send("<Response/>");
  }
);
```

- Header absent: validates with `authToken` and HMAC-SHA1.
- Header present: validates with `sharedKeySecret` and the header's algorithm.
- Invalid signature or unsupported algorithm: responds 403.
- Header present but `sharedKeySecret` not set: responds 500.

## Option 2: Validate manually

```js
const signature = req.header(twilio.SIGNATURE_HEADER);
const settings = req.header(twilio.SIGNATURE_SETTINGS_HEADER);

// No header means the Auth Token and HMAC_SHA1
const secret = settings ? sharedKeySecret : authToken;
const algorithm = twilio.getSignatureAlgorithm(settings);

const valid = twilio.validateRequest(secret, signature, url, req.body, algorithm);
```

For JSON bodies use `validateRequestWithBody(secret, signature, url, rawBody, algorithm)`.

If you use more than one SharedKey, look up the secret by the `key=` value in the header.

## Existing code

The `algorithm` argument is optional and defaults to HMAC-SHA1, so code that validates with the Auth Token needs no change:

```js
twilio.validateRequest(authToken, signature, url, params);
twilio.webhook(authToken);
```
