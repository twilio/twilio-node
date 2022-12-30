/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
import { AwsListInstance } from "./credential/aws";
import { PublicKeyListInstance } from "./credential/publicKey";
export interface CredentialListInstance {
    aws: AwsListInstance;
    publicKey: PublicKeyListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface CredentialSolution {
}
export declare function CredentialListInstance(version: V1): CredentialListInstance;
