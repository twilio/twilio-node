# Express Webhook Example

This example demonstrates how to use Twilio webhooks with Express.js.

## Setup

First, install Express as a dependency in your project:

```bash
npm install express
```

You may also need body-parser for parsing request bodies:

```bash
npm install body-parser
```

## Code

Here's the complete example:

```javascript
const twilio = require("twilio");
const bodyParser = require("body-parser");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const authToken = process.env.TWILIO_AUTH_TOKEN;

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

app.post("/message", twilio.webhook(authToken), (req, res) => {
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
```

## Alternative: Without Express

If you prefer not to use Express, you can validate Twilio requests manually:

```javascript
const twilio = require("twilio");
const http = require("http");
const url = require("url");
const querystring = require("querystring");

const authToken = process.env.TWILIO_AUTH_TOKEN;

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/message') {
    let body = '';
    req.on('data', chunk => {
      body += chunk.toString();
    });
    
    req.on('end', () => {
      const signature = req.headers['x-twilio-signature'];
      const requestUrl = `https://${req.headers.host}${req.url}`;
      const params = querystring.parse(body);
      
      const isValidRequest = twilio.validateRequest(authToken, signature, requestUrl, params);
      
      if (isValidRequest) {
        const response = new twilio.twiml.MessagingResponse();
        response.message(`Your text to me was ${params.Body}. Webhooks are neat :)`);
        
        res.writeHead(200, {'Content-Type': 'text/xml'});
        res.end(response.toString());
      } else {
        res.writeHead(403);
        res.end('Forbidden');
      }
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
```

## Notes

The Express example was moved to the advanced-examples directory to reduce the package size. Express is not required for using the Twilio SDK - it's just one way to handle webhook requests.