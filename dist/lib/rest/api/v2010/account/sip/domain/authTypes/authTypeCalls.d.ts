/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../../../V2010";
import { AuthCallsCredentialListMappingListInstance } from "./authTypeCalls/authCallsCredentialListMapping";
import { AuthCallsIpAccessControlListMappingListInstance } from "./authTypeCalls/authCallsIpAccessControlListMapping";
export interface AuthTypeCallsListInstance {
    credentialListMappings: AuthCallsCredentialListMappingListInstance;
    ipAccessControlListMappings: AuthCallsIpAccessControlListMappingListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AuthTypeCallsSolution {
    accountSid?: string;
    domainSid?: string;
}
export declare function AuthTypeCallsListInstance(version: V2010, accountSid: string, domainSid: string): AuthTypeCallsListInstance;
