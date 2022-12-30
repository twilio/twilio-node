/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../../V2";
/**
 * The InboundCallPrice record
 */
export declare class PricingV2VoiceVoiceNumberInboundCallPrice {
    "basePrice"?: number;
    "currentPrice"?: number;
    "numberType"?: string;
}
export declare class PricingV2VoiceVoiceNumberOutboundCallPrices {
    "basePrice"?: number;
    "currentPrice"?: number;
    "originationPrefixes"?: Array<string>;
}
/**
 * Options to pass to fetch a NumberInstance
 *
 * @property { string } [originationNumber] The origination phone number, in [E.164](https://www.twilio.com/docs/glossary/what-e164) format, for which to fetch the origin-based voice pricing information. E.164 format consists of a + followed by the country code and subscriber number.
 */
export interface NumberContextFetchOptions {
    originationNumber?: string;
}
export interface NumberContext {
    /**
     * Fetch a NumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NumberInstance
     */
    fetch(callback?: (error: Error | null, item?: NumberInstance) => any): Promise<NumberInstance>;
    /**
     * Fetch a NumberInstance
     *
     * @param { NumberContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NumberInstance
     */
    fetch(params: NumberContextFetchOptions, callback?: (error: Error | null, item?: NumberInstance) => any): Promise<NumberInstance>;
    fetch(params?: any, callback?: any): Promise<NumberInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NumberContextSolution {
    destinationNumber?: string;
}
export declare class NumberContextImpl implements NumberContext {
    protected _version: V2;
    protected _solution: NumberContextSolution;
    protected _uri: string;
    constructor(_version: V2, destinationNumber: string);
    fetch(params?: any, callback?: any): Promise<NumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): NumberContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface NumberResource {
    destination_number?: string | null;
    origination_number?: string | null;
    country?: string | null;
    iso_country?: string | null;
    outbound_call_prices?: Array<PricingV2VoiceVoiceNumberOutboundCallPrices> | null;
    inbound_call_price?: PricingV2VoiceVoiceNumberInboundCallPrice | null;
    price_unit?: string | null;
    url?: string | null;
}
export declare class NumberInstance {
    protected _version: V2;
    protected _solution: NumberContextSolution;
    protected _context?: NumberContext;
    constructor(_version: V2, payload: NumberResource, destinationNumber?: string);
    /**
     * The destination phone number, in E.164 format
     */
    destinationNumber?: string | null;
    /**
     * The origination phone number, in E.164 format
     */
    originationNumber?: string | null;
    /**
     * The name of the country
     */
    country?: string | null;
    /**
     * The ISO country code
     */
    isoCountry?: string | null;
    /**
     * The list of OutboundCallPriceWithOrigin records
     */
    outboundCallPrices?: Array<PricingV2VoiceVoiceNumberOutboundCallPrices> | null;
    inboundCallPrice?: PricingV2VoiceVoiceNumberInboundCallPrice | null;
    /**
     * The currency in which prices are measured, in ISO 4127 format (e.g. usd, eur, jpy)
     */
    priceUnit?: string | null;
    /**
     * The absolute URL of the resource
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a NumberInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NumberInstance
     */
    fetch(callback?: (error: Error | null, item?: NumberInstance) => any): Promise<NumberInstance>;
    /**
     * Fetch a NumberInstance
     *
     * @param { NumberContextFetchOptions } params - Parameter for request
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed NumberInstance
     */
    fetch(params: NumberContextFetchOptions, callback?: (error: Error | null, item?: NumberInstance) => any): Promise<NumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        destinationNumber: string | null | undefined;
        originationNumber: string | null | undefined;
        country: string | null | undefined;
        isoCountry: string | null | undefined;
        outboundCallPrices: PricingV2VoiceVoiceNumberOutboundCallPrices[] | null | undefined;
        inboundCallPrice: PricingV2VoiceVoiceNumberInboundCallPrice | null | undefined;
        priceUnit: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface NumberListInstance {
    (destinationNumber: string): NumberContext;
    get(destinationNumber: string): NumberContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NumberSolution {
}
export declare function NumberListInstance(version: V2): NumberListInstance;
export {};
