/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2010 from "../../V2010";
export interface BalanceListInstance {
    /**
     * Fetch a BalanceInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed BalanceInstance
     */
    fetch(callback?: (error: Error | null, item?: BalanceInstance) => any): Promise<BalanceInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface BalanceSolution {
    accountSid?: string;
}
export declare function BalanceListInstance(version: V2010, accountSid: string): BalanceListInstance;
interface BalanceResource {
    account_sid?: string | null;
    balance?: string | null;
    currency?: string | null;
}
export declare class BalanceInstance {
    protected _version: V2010;
    constructor(_version: V2010, payload: BalanceResource, accountSid: string);
    /**
     * Account Sid.
     */
    accountSid?: string | null;
    /**
     * Account balance
     */
    balance?: string | null;
    /**
     * Currency units
     */
    currency?: string | null;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        accountSid: string | null | undefined;
        balance: string | null | undefined;
        currency: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export {};
