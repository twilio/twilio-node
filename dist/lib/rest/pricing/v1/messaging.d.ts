/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
import { CountryListInstance } from "./messaging/country";
export interface MessagingListInstance {
    countries: CountryListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface MessagingSolution {
}
export declare function MessagingListInstance(version: V1): MessagingListInstance;
