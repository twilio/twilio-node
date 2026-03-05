import { CustomerProfilesListInstance } from "./trusthub/v1/customerProfiles.js";
import { EndUserListInstance } from "./trusthub/v1/endUser.js";
import { EndUserTypeListInstance } from "./trusthub/v1/endUserType.js";
import { PoliciesListInstance } from "./trusthub/v1/policies.js";
import { SupportingDocumentListInstance } from "./trusthub/v1/supportingDocument.js";
import { SupportingDocumentTypeListInstance } from "./trusthub/v1/supportingDocumentType.js";
import { TrustProductsListInstance } from "./trusthub/v1/trustProducts.js";
import { TrusthubBase } from "./TrusthubBase.js";

export class Trusthub extends TrusthubBase {
  /**
   * @deprecated - Use v1.customerProfiles instead
   */
  get customerProfiles(): CustomerProfilesListInstance {
    console.warn(
      "customerProfiles is deprecated. Use v1.customerProfiles instead."
    );
    return this.v1.customerProfiles;
  }

  /**
   * @deprecated - Use v1.endUsers instead
   */
  get endUsers(): EndUserListInstance {
    console.warn("endUsers is deprecated. Use v1.endUsers instead.");
    return this.v1.endUsers;
  }

  /**
   * @deprecated - Use v1.endUserTypes instead
   */
  get endUserTypes(): EndUserTypeListInstance {
    console.warn("endUserTypes is deprecated. Use v1.endUserTypes instead.");
    return this.v1.endUserTypes;
  }

  /**
   * @deprecated - Use v1.policies instead
   */
  get policies(): PoliciesListInstance {
    console.warn("policies is deprecated. Use v1.policies instead.");
    return this.v1.policies;
  }

  /**
   * @deprecated - Use v1.supportingDocuments instead
   */
  get supportingDocuments(): SupportingDocumentListInstance {
    console.warn(
      "supportingDocuments is deprecated. Use v1.supportingDocuments instead."
    );
    return this.v1.supportingDocuments;
  }

  /**
   * @deprecated - Use v1.supportingDocumentTypes instead
   */
  get supportingDocumentTypes(): SupportingDocumentTypeListInstance {
    console.warn(
      "supportingDocumentTypes is deprecated. Use v1.supportingDocumentTypes instead."
    );
    return this.v1.supportingDocumentTypes;
  }

  /**
   * @deprecated - Use v1.trustProducts instead
   */
  get trustProducts(): TrustProductsListInstance {
    console.warn("trustProducts is deprecated. Use v1.trustProducts instead.");
    return this.v1.trustProducts;
  }
}
