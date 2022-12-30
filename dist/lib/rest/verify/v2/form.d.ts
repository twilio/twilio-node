/// <reference types="node" />
/// <reference types="node" />
import { inspect, InspectOptions } from "util";
import V2 from "../V2";
declare type FormFormTypes = "form-push";
export interface FormContext {
    /**
     * Fetch a FormInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FormInstance
     */
    fetch(callback?: (error: Error | null, item?: FormInstance) => any): Promise<FormInstance>;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FormContextSolution {
    formType?: FormFormTypes;
}
export declare class FormContextImpl implements FormContext {
    protected _version: V2;
    protected _solution: FormContextSolution;
    protected _uri: string;
    constructor(_version: V2, formType: FormFormTypes);
    fetch(callback?: any): Promise<FormInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): FormContextSolution;
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
interface FormResource {
    form_type?: FormFormTypes;
    forms?: any | null;
    form_meta?: any | null;
    url?: string | null;
}
export declare class FormInstance {
    protected _version: V2;
    protected _solution: FormContextSolution;
    protected _context?: FormContext;
    constructor(_version: V2, payload: FormResource, formType?: FormFormTypes);
    formType?: FormFormTypes;
    /**
     * Object that contains the available forms for this type.
     */
    forms?: any | null;
    /**
     * Additional information for the available forms for this type.
     */
    formMeta?: any | null;
    /**
     * The URL to access the forms for this type.
     */
    url?: string | null;
    private get _proxy();
    /**
     * Fetch a FormInstance
     *
     * @param { function } [callback] - Callback to handle processed record
     *
     * @returns { Promise } Resolves to processed FormInstance
     */
    fetch(callback?: (error: Error | null, item?: FormInstance) => any): Promise<FormInstance>;
    /**
     * Provide a user-friendly representation
     *
     * @returns Object
     */
    toJSON(): {
        formType: "form-push" | undefined;
        forms: any;
        formMeta: any;
        url: string | null | undefined;
    };
    [inspect.custom](_depth: any, options: InspectOptions): string;
}
export interface FormListInstance {
    (formType: FormFormTypes): FormContext;
    get(formType: FormFormTypes): FormContext;
    /**
     * Provide a user-friendly representation
     */
    toJSON(): any;
    [inspect.custom](_depth: any, options: InspectOptions): any;
}
export interface FormSolution {
}
export declare function FormListInstance(version: V2): FormListInstance;
export {};
