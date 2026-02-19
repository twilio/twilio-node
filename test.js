import twilio from "./lib/rest/Twilio.js";

async function main() {
  const client = new twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  const result = await client.pricing.v2.voice.numbers
    .get("+919831560103" ?? "")
    .fetch();

  console.log(result.toJSON());
}

main().catch(console.error);
