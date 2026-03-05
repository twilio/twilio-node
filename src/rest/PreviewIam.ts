import { TokenListInstance } from "./previewIam/v1/token.js";
import { AuthorizeListInstance } from "./previewIam/v1/authorize.js";
import { PreviewIamBase } from "./PreviewIamBase.js";
import { OrganizationListInstance } from "./previewIam/versionless/organization.js";
import { Versionless } from "./previewIam/Versionless.js";

export class PreviewIam extends PreviewIamBase {
  _organization?: OrganizationListInstance;
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

  /** Getter for organization resource */
  get organization(): OrganizationListInstance {
    this._organization =
      this._organization || new Versionless(this).organization;
    return this._organization;
  }
}
