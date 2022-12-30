import { BaseTwilio, RequestOpts } from "./BaseTwilio";
/**
 * Base domain object
 *
 * @constructor
 *
 * @param {Twilio} twilio - A Twilio Client
 * @param {string} baseUrl - Base url for this domain
 */
export default class Domain {
    twilio: BaseTwilio;
    baseUrl: string;
    /**
     * Base domain object
     *
     * @constructor
     *
     * @param {Twilio} twilio - A Twilio Client
     * @param {string} baseUrl - Base url for this domain
     */
    constructor(twilio: BaseTwilio, baseUrl: string);
    /**
     * Turn a uri into an absolute url
     *
     * @param  {string} uri uri to transform
     * @return {string} absolute url
     */
    absoluteUrl(uri: string): string;
    /**
     * Make request to this domain
     *
     * @param {object} opts request options
     * @return {Promise} request promise
     */
    request(opts: RequestOpts): Promise<any>;
}
