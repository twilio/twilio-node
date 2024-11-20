import { TokenListInstance } from "./previewIam/v1/token";
import { AuthorizeListInstance } from "./previewIam/v1/authorize";
import PreviewIamBase from "./PreviewIamBase";

class PreviewIam extends PreviewIamBase {
  /**
   * @deprecated - Use v1.tokens instead
   */
  get tokens(): TokenListInstance {
    console.warn("tokens is deprecated. Use v1.tokens instead.");
    return this.v1.token;
  }

  /**
   * @deprecated - Use v1.authorize instead
   */
  get authorize(): AuthorizeListInstance {
    console.warn("authorize is deprecated. Use v1.authorize instead.");
    return this.v1.authorize;
  }
}

export = PreviewIam;
