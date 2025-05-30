/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Knowledge
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import KnowledgeBase from "../KnowledgeBase";
import Version from "../../base/Version";
import { KnowledgeListInstance } from "./v1/knowledge";

export default class V1 extends Version {
  /**
   * Initialize the V1 version of Knowledge
   *
   * @param domain - The Twilio (Twilio.Knowledge) domain
   */
  constructor(domain: KnowledgeBase) {
    super(domain, "v1");
  }

  /** knowledge - { Twilio.Knowledge.V1.KnowledgeListInstance } resource */
  protected _knowledge?: KnowledgeListInstance;

  /** Getter for knowledge resource */
  get knowledge(): KnowledgeListInstance {
    this._knowledge = this._knowledge || KnowledgeListInstance(this);
    return this._knowledge;
  }
}
