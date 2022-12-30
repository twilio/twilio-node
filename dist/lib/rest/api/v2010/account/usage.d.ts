/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../V2010";
import { RecordListInstance } from "./usage/record";
import { TriggerListInstance } from "./usage/trigger";
export interface UsageListInstance {
    records: RecordListInstance;
    triggers: TriggerListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface UsageSolution {
    accountSid?: string;
}
export declare function UsageListInstance(version: V2010, accountSid: string): UsageListInstance;
