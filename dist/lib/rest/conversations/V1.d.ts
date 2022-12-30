import ConversationsBase from "../ConversationsBase";
import Version from "../../base/Version";
import { AddressConfigurationListInstance } from "./v1/addressConfiguration";
import { ConfigurationListInstance } from "./v1/configuration";
import { ConversationListInstance } from "./v1/conversation";
import { CredentialListInstance } from "./v1/credential";
import { ParticipantConversationListInstance } from "./v1/participantConversation";
import { RoleListInstance } from "./v1/role";
import { ServiceListInstance } from "./v1/service";
import { UserListInstance } from "./v1/user";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Conversations
     *
     * @property { Twilio.Conversations.V1.AddressConfigurationListInstance } addressConfigurations - addressConfigurations resource
     * @property { Twilio.Conversations.V1.ConfigurationListInstance } configuration - configuration resource
     * @property { Twilio.Conversations.V1.ConversationListInstance } conversations - conversations resource
     * @property { Twilio.Conversations.V1.CredentialListInstance } credentials - credentials resource
     * @property { Twilio.Conversations.V1.ParticipantConversationListInstance } participantConversations - participantConversations resource
     * @property { Twilio.Conversations.V1.RoleListInstance } roles - roles resource
     * @property { Twilio.Conversations.V1.ServiceListInstance } services - services resource
     * @property { Twilio.Conversations.V1.UserListInstance } users - users resource
     *
     * @param { Twilio.Conversations } domain - The Twilio domain
     */
    constructor(domain: ConversationsBase);
    protected _addressConfigurations?: AddressConfigurationListInstance;
    protected _configuration?: ConfigurationListInstance;
    protected _conversations?: ConversationListInstance;
    protected _credentials?: CredentialListInstance;
    protected _participantConversations?: ParticipantConversationListInstance;
    protected _roles?: RoleListInstance;
    protected _services?: ServiceListInstance;
    protected _users?: UserListInstance;
    get addressConfigurations(): AddressConfigurationListInstance;
    get configuration(): ConfigurationListInstance;
    get conversations(): ConversationListInstance;
    get credentials(): CredentialListInstance;
    get participantConversations(): ParticipantConversationListInstance;
    get roles(): RoleListInstance;
    get services(): ServiceListInstance;
    get users(): UserListInstance;
}
