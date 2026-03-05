import { ServiceListInstance } from "./proxy/v1/service.js";
import { ProxyBase } from "./ProxyBase.js";

export class Proxy extends ProxyBase {
  /**
   * @deprecated - Use v1.services instead
   */
  get services(): ServiceListInstance {
    console.warn("services is deprecated. Use v1.services instead.");
    return this.v1.services;
  }
}
