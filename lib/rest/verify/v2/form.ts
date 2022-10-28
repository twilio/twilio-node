/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Verify
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V2 from "../V2";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");


type FormFormTypes = 'form-push';


/**
 * Options to pass to fetch a FormInstance
 *
 * @property { FormFormTypes } formType The Type of this Form. Currently only &#x60;form-push&#x60; is supported.
 */
export interface FormListInstanceFetchOptions {
  formType: FormFormTypes;
}

export interface FormListInstance {


  /**
   * Fetch a FormInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FormInstance
   */
  fetch(callback?: (error: Error | null, item?: FormInstance) => any): Promise<FormInstance>;
  /**
   * Fetch a FormInstance
   *
   * @param { FormListInstanceFetchOptions } params - Parameter for request
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FormInstance
   */
  fetch(params: FormListInstanceFetchOptions, callback?: (error: Error | null, item?: FormInstance) => any): Promise<FormInstance>;
  fetch(params?: any, callback?: any): Promise<FormInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FormSolution {
}

interface FormListInstanceImpl extends FormListInstance {}
class FormListInstanceImpl implements FormListInstance {
  _version?: V2;
  _solution?: FormSolution;
  _uri?: string;

}

export function FormListInstance(version: V2): FormListInstance {
  const instance = {} as FormListInstanceImpl;

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Forms`;

  instance.fetch = function fetch(params?: any, callback?: any): Promise<FormInstance> {
    if (typeof params === "function") {
      callback = params;
      params = {};
    } else {
      params = params || {};
    }

    const data: any = {};


    const headers: any = {};

    let operationVersion = version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get', params: data, headers });
    
    operationPromise = operationPromise.then(payload => new FormInstance(operationVersion, payload));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
    return operationPromise;


    }

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}

interface FormPayload extends FormResource{
}

interface FormResource {
  form_type?: FormFormTypes;
  forms?: any | null;
  form_meta?: any | null;
  url?: string | null;
}

export class FormInstance {

  constructor(protected _version: V2, payload: FormPayload) {
    this.formType = payload.form_type;
    this.forms = payload.forms;
    this.formMeta = payload.form_meta;
    this.url = payload.url;

  }

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

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      formType: this.formType, 
      forms: this.forms, 
      formMeta: this.formMeta, 
      url: this.url
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}


