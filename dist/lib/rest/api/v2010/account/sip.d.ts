/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../V2010";
import { CredentialListListInstance } from "./sip/credentialList";
import { DomainListInstance } from "./sip/domain";
import { IpAccessControlListListInstance } from "./sip/ipAccessControlList";
export interface SipListInstance {
    credentialLists: CredentialListListInstance;
    domains: DomainListInstance;
    ipAccessControlLists: IpAccessControlListListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface SipSolution {
    accountSid?: string;
}
export declare function SipListInstance(version: V2010, accountSid: string): SipListInstance;
