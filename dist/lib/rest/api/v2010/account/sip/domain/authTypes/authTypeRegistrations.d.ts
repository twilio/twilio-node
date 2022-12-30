/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../../../../V2010";
import { AuthRegistrationsCredentialListMappingListInstance } from "./authTypeRegistrations/authRegistrationsCredentialListMapping";
export interface AuthTypeRegistrationsListInstance {
    credentialListMappings: AuthRegistrationsCredentialListMappingListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface AuthTypeRegistrationsSolution {
    accountSid?: string;
    domainSid?: string;
}
export declare function AuthTypeRegistrationsListInstance(version: V2010, accountSid: string, domainSid: string): AuthTypeRegistrationsListInstance;
