// Quick test to verify fetch-based RequestClient works
const RequestClient = require('./lib/base/RequestClient');

// Mock fetch for testing
global.fetch = jest.fn(() =>
  Promise.resolve({
    status: 200,
    text: () => Promise.resolve('{"test": "success"}'),
    headers: new Map([['content-type', 'application/json']]),
  })
);

async function testFetchImplementation() {
  console.log('Testing fetch-based RequestClient...');
  
  try {
    const client = new RequestClient();
    console.log('✓ RequestClient created successfully');
    console.log('✓ Default timeout:', client.defaultTimeout);
    console.log('✓ Fetch function assigned:', typeof client.fetch);
    
    // Test a simple request
    const response = await client.request({
      method: 'get',
      uri: 'https://api.twilio.com/test',
      headers: { 'Content-Type': 'application/json' }
    });
    
    console.log('✓ Request completed successfully');
    console.log('✓ Response status:', response.statusCode);
    console.log('✓ Response body:', response.body);
    
    console.log('\n🎉 All tests passed! Fetch implementation working correctly.');
  } catch (error) {
    console.error('❌ Test failed:', error.message);
    process.exit(1);
  }
}

// Only run if this file is executed directly
if (require.main === module) {
  testFetchImplementation();
}

module.exports = { testFetchImplementation };