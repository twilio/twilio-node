import PreviewBase from "../PreviewBase";
import Version from "../../base/Version";
import { AuthorizationDocumentListInstance } from "./hosted_numbers/authorizationDocument";
import { HostedNumberOrderListInstance } from "./hosted_numbers/hostedNumberOrder";
export default class HostedNumbers extends Version {
    /**
     * Initialize the HostedNumbers version of Preview
     *
     * @property { Twilio.Preview.HostedNumbers.AuthorizationDocumentListInstance } authorizationDocuments - authorizationDocuments resource
     * @property { Twilio.Preview.HostedNumbers.HostedNumberOrderListInstance } hostedNumberOrders - hostedNumberOrders resource
     *
     * @param { Twilio.Preview } domain - The Twilio domain
     */
    constructor(domain: PreviewBase);
    protected _authorizationDocuments?: AuthorizationDocumentListInstance;
    protected _hostedNumberOrders?: HostedNumberOrderListInstance;
    get authorizationDocuments(): AuthorizationDocumentListInstance;
    get hostedNumberOrders(): HostedNumberOrderListInstance;
}
