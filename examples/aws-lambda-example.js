/**
 * AWS Lambda function example using modular Twilio client
 * This demonstrates significant bundle size reduction for serverless deployments
 */

const { ModularClient } = require("twilio");

// Initialize client with only the services needed for this function
// This reduces bundle size from ~13MB to ~2-3MB (85% reduction)
const twilioClient = new ModularClient(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN,
  {
    // Only load messaging service - significant bundle size reduction
    services: ["messaging"],
  }
);

/**
 * Lambda handler for sending SMS messages
 * Benefits from reduced bundle size and faster cold starts
 */
exports.sendSMS = async (event) => {
  try {
    const { to, message } = JSON.parse(event.body);

    if (!to || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: "Missing required fields: to, message",
        }),
      };
    }

    // Send SMS using only the messaging service
    // Bundle only includes messaging-related code
    const messageResponse = await twilioClient.messaging.messages.create({
      to: to,
      from: process.env.TWILIO_PHONE_NUMBER,
      body: message,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        messageSid: messageResponse.sid,
        status: messageResponse.status,
      }),
    };
  } catch (error) {
    console.error("Error sending SMS:", error);

    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to send SMS",
        details: error.message,
      }),
    };
  }
};

/**
 * Alternative: Even more minimal approach using individual service imports
 * This could reduce bundle size to ~1-2MB (90% reduction)
 */
/*
const { Messaging } = require('twilio/lib/services');
const { Client } = require('twilio/lib/base/BaseTwilio');

const baseClient = new Client(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const messaging = new Messaging(baseClient);

exports.sendSMSMinimal = async (event) => {
  // Use messaging service directly
  const messageResponse = await messaging.messages.create({...});
  // ... rest of handler
};
*/

/**
 * Deployment considerations:
 *
 * 1. Bundle Size Comparison:
 *    - Traditional: ~13MB (includes all Twilio services)
 *    - Modular: ~2-3MB (85% reduction)
 *    - Individual imports: ~1-2MB (90% reduction)
 *
 * 2. Cold Start Performance:
 *    - Smaller bundles = faster cold starts
 *    - Less memory usage
 *    - Faster deployment times
 *
 * 3. Cost Savings:
 *    - Reduced Lambda execution time
 *    - Lower memory requirements
 *    - Faster deployments
 */
