/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../V1";
import { BulkCountryUpdateListInstance } from "./dialingPermissions/bulkCountryUpdate";
import { CountryListInstance } from "./dialingPermissions/country";
import { SettingsListInstance } from "./dialingPermissions/settings";
export interface DialingPermissionsListInstance {
    bulkCountryUpdates: BulkCountryUpdateListInstance;
    countries: CountryListInstance;
    settings: SettingsListInstance;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface DialingPermissionsSolution {
}
export declare function DialingPermissionsListInstance(version: V1): DialingPermissionsListInstance;
