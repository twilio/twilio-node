import IamBase from "./IamBase";
import { ApiKeyListInstance } from "./iam/v1/apiKey";
import { GetApiKeysListInstance } from "./iam/v1/getApiKeys";
import { KeyListInstance } from "./iam/v1/key";

class Iam extends IamBase {
  /**
   * @deprecated - Use v1.apiKey instead
   */
  get apiKey(): ApiKeyListInstance {
    console.warn("apiKey is deprecated. Use v1.apiKey instead.");
    return this.v1.apiKey;
  }

  /**
   * @deprecated - Use v1.getApiKeys instead
   */
  get getApiKeys(): GetApiKeysListInstance {
    console.warn("getApiKeys is deprecated. Use v1.getApiKeys instead.");
    return this.v1.getApiKeys;
  }

  /**
   * @deprecated - Use v1.keys instead
   */
  get keys(): KeyListInstance {
    console.warn("keys is deprecated. Use v1.keys instead.");
    return this.v1.keys;
  }
}

export = Iam;
