import { AccountListInstance } from "./previewIam/organizations/account";
import { RoleAssignmentListInstance } from "./previewIam/organizations/roleAssignment";
import { UserListInstance } from "./previewIam/organizations/user";
import { TokenListInstance} from "./previewIam/v1/token";
import { AuthorizeListInstance} from "./previewIam/v1/authorize";
import PreviewIamBase from "./PreviewIamBase";

class PreviewIam extends PreviewIamBase {
  /**
   * @deprecated - Use organizations.accounts instead
   */
  get accounts(): AccountListInstance {
    console.warn(
      "accounts is deprecated. Use organizations.accounts instead."
    );
    return this.organizations.accounts;
  }

    /**
     * @deprecated - Use organizations.roleAssignments instead
     */
    get roleAssignments(): RoleAssignmentListInstance {
      console.warn(
          "roleAssignments is deprecated. Use organizations.roleAssignments instead."
      );
      return this.organizations.roleAssignments;
    }

    /**
     * @deprecated - Use organizations.users instead
     */
    get users(): UserListInstance {
      console.warn(
          "users is deprecated. Use organizations.users instead."
      );
      return this.organizations.users;
    }

    /**
     * @deprecated - Use v1.tokens instead
     */
    get tokens(): TokenListInstance {
      console.warn(
          "tokens is deprecated. Use v1.tokens instead."
      );
      return this.v1.tokens;
    }

    /**
     * @deprecated - Use v1.authorize instead
     */
    get authorize(): AuthorizeListInstance {
      console.warn(
          "authorize is deprecated. Use v1.authorize instead."
      );
      return this.v1.authorize;
    }
}

export = PreviewIam;
