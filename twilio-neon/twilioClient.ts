import { Twilio } from 'twilio';

export function createTwilioClient(accountSid: string, authToken: string) {
  return new Twilio(accountSid, authToken);
}
