const twilio = require("twilio");
const bodyParser = require("body-parser");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const express = require("express");
const app = express();
const port = 3000;

app.use(
  bodyParser.json({
    verify: (req, res, buf) => {
      req.rawBody = buf;
    },
  })
);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/message", twilio.webhook(), (req, res) => {
  // Twilio Messaging URL - receives incoming messages from Twilio
  const response = new MessagingResponse();

  response.message(`Your text to me was ${req.body.Body}.
                    Webhooks are neat :)`);

  res.set("Content-Type", "text/xml");
  res.send(response.toString());
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
