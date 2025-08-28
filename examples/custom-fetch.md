# Bringing Your Own Fetch Implementation

With the new fetch-based Twilio Node Helper Library, you can significantly reduce bundle size by providing your own fetch implementation. This is particularly useful for:

- Edge environments that have built-in fetch
- Node.js applications that want to use undici or other optimized HTTP clients  
- Lambda functions where bundle size matters

## Using Built-in Fetch (Node.js 18+)

```js
const twilio = require('twilio');

// No additional configuration needed - uses global fetch
const client = twilio(accountSid, authToken);

client.messages.create({
  to: '+15555555555',
  from: '+15555555551',
  body: 'Using built-in fetch!'
});
```

## Using Undici for Better Performance

```js
const twilio = require('twilio');
const { fetch } = require('undici');

const client = twilio(accountSid, authToken, {
  httpClient: new twilio.RequestClient({ fetch })
});

client.messages.create({
  to: '+15555555555', 
  from: '+15555555551',
  body: 'Using undici for better performance!'
});
```

## Using node-fetch for Compatibility

```js
const twilio = require('twilio');
const fetch = require('node-fetch');

const client = twilio(accountSid, authToken, {
  httpClient: new twilio.RequestClient({ fetch })
});
```

## Custom Fetch with Additional Features

```js
const twilio = require('twilio');

// Custom fetch wrapper with logging
const customFetch = async (url, options) => {
  console.log(`Making request to: ${url}`);
  const response = await fetch(url, options);
  console.log(`Response status: ${response.status}`);
  return response;
};

const client = twilio(accountSid, authToken, {
  httpClient: new twilio.RequestClient({ 
    fetch: customFetch,
    autoRetry: true,
    maxRetries: 5
  })
});
```

## Benefits

- **Reduced Bundle Size**: No axios dependency (~100KB+ saved)
- **Better Performance**: Use optimized HTTP clients like undici
- **Environment Flexibility**: Works in Edge, Node.js, and browser environments
- **Future-Proof**: Uses web standards instead of library-specific APIs