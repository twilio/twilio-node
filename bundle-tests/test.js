// Test file to verify bundling works
const twilio = require('twilio');

// Simple test to ensure the package can be imported and basic functionality works
function testTwilioImport() {
  // Just verify we can create a client
  const client = twilio('ACCOUNT_SID', 'AUTH_TOKEN');

  // Check that key components exist
  console.log('Twilio client created successfully');
  console.log('Client has messages API:', !!client.messages);
  console.log('Client has calls API:', !!client.calls);

  return client !== undefined;
}

testTwilioImport();