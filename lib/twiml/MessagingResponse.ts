'use strict';

/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import { XMLElement } from 'xmlbuilder';
import TwiML from './TwiML';

class MessagingResponse extends TwiML {
  /**
   * <Response> TwiML for Messages
   */
  constructor() {
    super();
    this._propertyName = 'response';
  }
  /**
   * <Message> TwiML Verb
   *
   * @function message
   * @memberof MessagingResponse#
   */
  message(body: string): MessagingResponse.Message;
  message(attributes: MessagingResponse.MessageAttributes, body: string): MessagingResponse.Message;
  message(attributes: MessagingResponse.MessageAttributes | string, body?: string): MessagingResponse.Message {
    if (typeof attributes === 'string') {
        body = attributes
        attributes = {}
    }
    return new MessagingResponse.Message(this.response.ele('Message', attributes, body));
  }
  /**
   * <Redirect> TwiML Verb
   *
   * @function redirect
   * @memberof MessagingResponse#
   */
  redirect(url: string): MessagingResponse.Redirect;
  redirect(attributes: MessagingResponse.RedirectAttributes, url: string): MessagingResponse.Redirect;
  redirect(attributes: MessagingResponse.RedirectAttributes | string, url?: string): MessagingResponse.Redirect {
    if (typeof attributes === 'string') {
        url = attributes
        attributes = {}
    }
    return new MessagingResponse.Redirect(this.response.ele('Redirect', attributes, url));
  }
}

namespace MessagingResponse {

  export interface MessageAttributes {
    action?: string;
    from?: string;
    method?: string;
    statusCallback?: string;
    to?: string;
  }

  export interface RedirectAttributes {
    method?: string;
  }


  export class Body extends TwiML {
    body: XMLElement;
    /**
     * <Body> TwiML Noun
     */
    constructor(body: XMLElement) {
      super();
      this.body = body;
      this._propertyName = 'body';
    }
  }


  export class Media extends TwiML {
    media: XMLElement;
    /**
     * <Media> TwiML Noun
     */
    constructor(media: XMLElement) {
      super();
      this.media = media;
      this._propertyName = 'media';
    }
  }


  export class Message extends TwiML {
    message: XMLElement;
    /**
     * <Message> TwiML Verb
     */
    constructor(message: XMLElement) {
      super();
      this.message = message;
      this._propertyName = 'message';
    }
    /**
     * <Body> TwiML Noun
     *
     * @function body
     * @memberof Message#
     */
    body(message: string): MessagingResponse.Body;
    body(attributes: object, message: string): MessagingResponse.Body;
    body(attributes: object | string, message?: string): MessagingResponse.Body {
      if (typeof attributes === 'string') {
          message = attributes
          attributes = {}
      }
      return new MessagingResponse.Body(this.message.ele('Body', attributes, message));
    }
    /**
     * <Media> TwiML Noun
     *
     * @function media
     * @memberof Message#
     */
    media(url: string): MessagingResponse.Media;
    media(attributes: object, url: string): MessagingResponse.Media;
    media(attributes: object | string, url?: string): MessagingResponse.Media {
      if (typeof attributes === 'string') {
          url = attributes
          attributes = {}
      }
      return new MessagingResponse.Media(this.message.ele('Media', attributes, url));
    }
  }


  export class Redirect extends TwiML {
    redirect: XMLElement;
    /**
     * <Redirect> TwiML Verb
     */
    constructor(redirect: XMLElement) {
      super();
      this.redirect = redirect;
      this._propertyName = 'redirect';
    }
  }
}

export default MessagingResponse;