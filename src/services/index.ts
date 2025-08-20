/**
 * Individual service exports for modular imports
 * This allows users to import only the services they need, reducing bundle size
 * 
 * Example usage:
 * const Api = require('twilio/lib/services').Api;
 * const Messaging = require('twilio/lib/services').Messaging;
 * 
 * Or with ES modules:
 * import { Api, Messaging } from 'twilio/lib/services';
 * 
 * Instead of importing the entire Twilio client with all services
 */

// Core services
export { default as Api } from "../rest/Api";
export { default as Messaging } from "../rest/Messaging";
export { default as Voice } from "../rest/Voice";
export { default as Verify } from "../rest/Verify";
export { default as Lookups } from "../rest/Lookups";

// Communication services
export { default as Chat } from "../rest/Chat";
export { default as Conversations } from "../rest/Conversations";
export { default as Notify } from "../rest/Notify";
export { default as Video } from "../rest/Video";

// Platform services
export { default as Accounts } from "../rest/Accounts";
export { default as Monitor } from "../rest/Monitor";
export { default as Sync } from "../rest/Sync";
export { default as Taskrouter } from "../rest/Taskrouter";

// Developer tools
export { default as Studio } from "../rest/Studio";
export { default as Serverless } from "../rest/Serverless";
export { default as Events } from "../rest/Events";

// Specialized services
export { default as Assistants } from "../rest/Assistants";
export { default as FlexApi } from "../rest/FlexApi";
export { default as FrontlineApi } from "../rest/FrontlineApi";
export { default as Intelligence } from "../rest/Intelligence";
export { default as Insights } from "../rest/Insights";

// Infrastructure services
export { default as Numbers } from "../rest/Numbers";
export { default as Pricing } from "../rest/Pricing";
export { default as Proxy } from "../rest/Proxy";
export { default as Routes } from "../rest/Routes";
export { default as Trunking } from "../rest/Trunking";
export { default as Wireless } from "../rest/Wireless";

// Additional services
export { default as Bulkexports } from "../rest/Bulkexports";
export { default as Content } from "../rest/Content";
export { default as Iam } from "../rest/Iam";
export { default as IpMessaging } from "../rest/IpMessaging";
export { default as Marketplace } from "../rest/Marketplace";
export { default as Oauth } from "../rest/Oauth";
export { default as Preview } from "../rest/Preview";
export { default as PreviewIam } from "../rest/PreviewIam";
export { default as Supersim } from "../rest/Supersim";
export { default as Trusthub } from "../rest/Trusthub";