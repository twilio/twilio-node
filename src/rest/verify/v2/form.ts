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
import { isValidPathParam } from "../../../base/utility";

export type FormFormTypes = "form-push";

export interface FormContext {
  /**
   * Fetch a FormInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FormInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FormInstance) => any
  ): Promise<FormInstance>;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FormContextSolution {
  formType: FormFormTypes;
}

export class FormContextImpl implements FormContext {
  protected _solution: FormContextSolution;
  protected _uri: string;

  constructor(protected _version: V2, formType: FormFormTypes) {
    if (!isValidPathParam(formType)) {
      throw new Error("Parameter 'formType' is not valid.");
    }

    this._solution = { formType };
    this._uri = `/Forms/${formType}`;
  }

  async fetch(
    callback?: (error: Error | null, item?: FormInstance) => any
  ): Promise<FormInstance> {
    const headers: any = {};
    headers["Accept"] = "application/json";

    const instance = this;
    let operationVersion = instance._version,
      operationPromise = operationVersion.fetch({
        uri: instance._uri,
        method: "get",
        headers,
      });

    try {
      let payload = await operationPromise;
      let operation = new FormInstance(
        operationVersion,
        payload,
        instance._solution.formType
      );

      if (callback) {
        callback(null, operation);
      }

      return operation;
    } catch (err: any) {
      if (callback) {
        callback(err);
      }
      throw err;
    }
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return this._solution;
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

interface FormPayload extends FormResource {}

interface FormResource {
  form_type: FormFormTypes;
  forms: any;
  form_meta: any;
  url: string;
}

export class FormInstance {
  protected _solution: FormContextSolution;
  protected _context?: FormContext;

  constructor(
    protected _version: V2,
    payload: FormResource,
    formType?: FormFormTypes
  ) {
    this.formType = payload.form_type;
    this.forms = payload.forms;
    this.formMeta = payload.form_meta;
    this.url = payload.url;

    this._solution = { formType: formType || this.formType };
  }

  formType: FormFormTypes;
  /**
   * Object that contains the available forms for this type. This available forms are given in the standard [JSON Schema](https://json-schema.org/) format
   */
  forms: any;
  /**
   * Additional information for the available forms for this type. E.g. The separator string used for `binding` in a Factor push.
   */
  formMeta: any;
  /**
   * The URL to access the forms for this type.
   */
  url: string;

  private get _proxy(): FormContext {
    this._context =
      this._context ||
      new FormContextImpl(this._version, this._solution.formType);
    return this._context;
  }

  /**
   * Fetch a FormInstance
   *
   * @param callback - Callback to handle processed record
   *
   * @returns Resolves to processed FormInstance
   */
  fetch(
    callback?: (error: Error | null, item?: FormInstance) => any
  ): Promise<FormInstance> {
    return this._proxy.fetch(callback);
  }

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
      url: this.url,
    };
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}

export interface FormSolution {}

export interface FormListInstance {
  _version: V2;
  _solution: FormSolution;
  _uri: string;

  (formType: FormFormTypes): FormContext;
  get(formType: FormFormTypes): FormContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export function FormListInstance(version: V2): FormListInstance {
  const instance = ((formType) => instance.get(formType)) as FormListInstance;

  instance.get = function get(formType): FormContext {
    return new FormContextImpl(version, formType);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

  instance.toJSON = function toJSON() {
    return instance._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(instance.toJSON(), options);
  };

  return instance;
}
