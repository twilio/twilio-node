/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
import { CountryListInstance } from "./voice/country";
import { NumberListInstance } from "./voice/number";
export interface VoiceListInstance {
    countries: CountryListInstance;
    numbers: NumberListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface VoiceSolution {
}
export declare function VoiceListInstance(version: V2): VoiceListInstance;
