import TwilioClient = require('../rest/Twilio');
import { RequestOpts } from "../base/BaseTwilio";

declare class Domain {
  constructor(twilio: any, baseUrl: string);

  /**
   * Turn a uri into an absolute url
   *
   * @param  uri uri to transform
   * @return absolute url
   */
  absoluteUrl(uri: string): string;

  /**
   * Make request to this domain
   *
   * @param opts request options
   * @return request promise
   */
  request(opts?: RequestOpts): Promise<any>;
}

export = Domain;
