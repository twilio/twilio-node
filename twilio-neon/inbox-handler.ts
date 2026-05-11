import { createTwilioClient } from './twilioClient';
import { generateReply } from './messageProcessor';

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const { searchParams } = new URL(request.url);
    const body = await request.text();

    const params = new URLSearchParams(body);
    const incomingMsg = params.get('Body') || '';
    const from = params.get('From') || '';

    const twilio = createTwilioClient(env.TWILIO_SID, env.TWILIO_TOKEN);
    const reply = generateReply(incomingMsg);

    try {
      await twilio.messages.create({
        from: env.TO_WHATSAPP_NUMBER,
        to: from,
        body: reply,
      });
    } catch (error) {
      return new Response('Failed to send message', { status: 500 });
    }

    return new Response('OK', { status: 200 });
  },
};
