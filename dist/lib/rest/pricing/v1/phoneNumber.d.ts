/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
import { CountryListInstance } from "./phoneNumber/country";
export interface PhoneNumberListInstance {
    countries: CountryListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface PhoneNumberSolution {
}
export declare function PhoneNumberListInstance(version: V1): PhoneNumberListInstance;
