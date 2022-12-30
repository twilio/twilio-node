/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V1 from "../../V1";
/**
 * The InboundCallPrice record
 */
export declare class PricingV1VoiceVoiceNumberInboundCallPrice {
    "basePrice"?: number;
    "currentPrice"?: number;
    "numberType"?: string;
}
/**
 * The OutboundCallPrice record
 */
export declare class PricingV1VoiceVoiceNumberOutboundCallPrice {
    "basePrice"?: number;
    "currentPrice"?: number;
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
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NumberContextSolution {
    number?: string;
}
export declare class NumberContextImpl implements NumberContext {
    protected _version: V1;
    protected _solution: NumberContextSolution;
    protected _uri: string;
    constructor(_version: V1, number: string);
    fetch(callback?: any): Promise<NumberInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): NumberContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface NumberResource {
    number?: string | null;
    country?: string | null;
    iso_country?: string | null;
    outbound_call_price?: PricingV1VoiceVoiceNumberOutboundCallPrice | null;
    inbound_call_price?: PricingV1VoiceVoiceNumberInboundCallPrice | null;
    price_unit?: string | null;
    url?: string | null;
}
export declare class NumberInstance {
    protected _version: V1;
    protected _solution: NumberContextSolution;
    protected _context?: NumberContext;
    constructor(_version: V1, payload: NumberResource, number?: string);
    /**
     * The phone number
     */
    number?: string | null;
    /**
     * The name of the country
     */
    country?: string | null;
    /**
     * The ISO country code
     */
    isoCountry?: string | null;
    outboundCallPrice?: PricingV1VoiceVoiceNumberOutboundCallPrice | null;
    inboundCallPrice?: PricingV1VoiceVoiceNumberInboundCallPrice | null;
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
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        number: string | null | undefined;
        country: string | null | undefined;
        isoCountry: string | null | undefined;
        outboundCallPrice: PricingV1VoiceVoiceNumberOutboundCallPrice | null | undefined;
        inboundCallPrice: PricingV1VoiceVoiceNumberInboundCallPrice | null | undefined;
        priceUnit: string | null | undefined;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface NumberListInstance {
    (number: string): NumberContext;
    get(number: string): NumberContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface NumberSolution {
}
export declare function NumberListInstance(version: V1): NumberListInstance;
export {};
