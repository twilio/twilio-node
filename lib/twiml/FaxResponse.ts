'use strict';

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import { XMLElement } from 'xmlbuilder';
import TwiML from './TwiML';

class FaxResponse extends TwiML {
  /**
   * <Response> TwiML for Faxes
   */
  constructor() {
    super();
    this._propertyName = 'response';
  }
  /**
   * <Receive> TwiML Verb
   *
   * @function receive
   * @memberof FaxResponse#
   */
  receive(attributes?: FaxResponse.ReceiveAttributes): FaxResponse.Receive {
    return new FaxResponse.Receive(this.response.ele('Receive', attributes));
  }
}

namespace FaxResponse {

  type ReceiveMediaType = 'application/pdf'|'image/tiff';

  type ReceivePageSize = 'letter'|'legal'|'a4';

  export interface ReceiveAttributes {
    action?: string;
    mediaType?: ReceiveMediaType;
    method?: string;
    pageSize?: ReceivePageSize;
    storeMedia?: boolean;
  }


  export class Receive extends TwiML {
    receive: XMLElement;
    /**
     * <Receive> TwiML Verb
     */
    constructor(receive: XMLElement) {
      super();
      this.receive = receive;
      this._propertyName = 'receive';
    }
  }
}

export default FaxResponse;
