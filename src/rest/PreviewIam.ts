import { TokenListInstance } from "./previewIam/v1/token";
import { AuthorizeListInstance } from "./previewIam/v1/authorize";
import PreviewIamBase from "./PreviewIamBase";
import { OrganizationListInstance } from "./previewIam/versionless/organization";
import Versionless from "./previewIam/Versionless";

class PreviewIam extends PreviewIamBase {
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

export = PreviewIam;
