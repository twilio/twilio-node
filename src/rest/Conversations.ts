import { AddressConfigurationListInstance } from "./conversations/v1/addressConfiguration.js";
import { ConfigurationListInstance } from "./conversations/v1/configuration.js";
import { ConversationListInstance } from "./conversations/v1/conversation.js";
import { CredentialListInstance } from "./conversations/v1/credential.js";
import { ParticipantConversationListInstance } from "./conversations/v1/participantConversation.js";
import { RoleListInstance } from "./conversations/v1/role.js";
import { ServiceListInstance } from "./conversations/v1/service.js";
import { UserListInstance } from "./conversations/v1/user.js";
import { ConversationsBase } from "./ConversationsBase.js";

export class Conversations extends ConversationsBase {
  /**
   * @deprecated - Use v1.configuration instead
   */
  get configuration(): ConfigurationListInstance {
    console.warn("configuration is deprecated. Use v1.configuration instead.");
    return this.v1.configuration;
  }

  /**
   * @deprecated - Use v1.addressConfigurations instead
   */
  get addressConfigurations(): AddressConfigurationListInstance {
    console.warn(
      "addressConfigurations is deprecated. Use v1.addressConfigurations instead."
    );
    return this.v1.addressConfigurations;
  }

  /**
   * @deprecated - Use v1.conversations instead
   */
  get conversations(): ConversationListInstance {
    console.warn("conversations is deprecated. Use v1.conversations instead.");
    return this.v1.conversations;
  }

  /**
   * @deprecated - Use v1.credentials instead
   */
  get credentials(): CredentialListInstance {
    console.warn("credentials is deprecated. Use v1.credentials instead.");
    return this.v1.credentials;
  }

  /**
   * @deprecated - Use v1.participantConversations instead
   */
  get participantConversations(): ParticipantConversationListInstance {
    console.warn(
      "participantConversations is deprecated. Use v1.participantConversations instead."
    );
    return this.v1.participantConversations;
  }

  /**
   * @deprecated - Use v1.roles instead
   */
  get roles(): RoleListInstance {
    console.warn("roles is deprecated. Use v1.roles instead.");
    return this.v1.roles;
  }

  /**
   * @deprecated - Use v1.services instead
   */
  get services(): ServiceListInstance {
    console.warn("services is deprecated. Use v1.services instead.");
    return this.v1.services;
  }

  /**
   * @deprecated - Use v1.users instead
   */
  get users(): UserListInstance {
    console.warn("users is deprecated. Use v1.users instead.");
    return this.v1.users;
  }
}
