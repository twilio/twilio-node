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

type FormFormTypes = "form-push";

export interface FormContext {
  /**
   * Fetch a FormInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FormInstance
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
  formType?: FormFormTypes;
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

  fetch(callback?: any): Promise<FormInstance> {
    let operationVersion = this._version,
      operationPromise = operationVersion.fetch({
        uri: this._uri,
        method: "get",
      });

    operationPromise = operationPromise.then(
      (payload) =>
        new FormInstance(operationVersion, payload, this._solution.formType)
    );

    operationPromise = this._version.setPromiseCallback(
      operationPromise,
      callback
    );
    return operationPromise;
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
  form_type?: FormFormTypes;
  forms?: any | null;
  form_meta?: any | null;
  url?: string | null;
}

export class FormInstance {
  protected _solution: FormContextSolution;
  protected _context?: FormContext;

  constructor(
    protected _version: V2,
    payload: FormPayload,
    formType?: FormFormTypes
  ) {
    this.formType = payload.form_type;
    this.forms = payload.forms;
    this.formMeta = payload.form_meta;
    this.url = payload.url;

    this._solution = { formType: formType || this.formType };
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

  private get _proxy(): FormContext {
    this._context =
      this._context ||
      new FormContextImpl(this._version, this._solution.formType);
    return this._context;
  }

  /**
   * Fetch a FormInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed FormInstance
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

export interface FormListInstance {
  (formType: FormFormTypes): FormContext;
  get(formType: FormFormTypes): FormContext;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface FormSolution {}

interface FormListInstanceImpl extends FormListInstance {}
class FormListInstanceImpl implements FormListInstance {
  _version?: V2;
  _solution?: FormSolution;
  _uri?: string;
}

export function FormListInstance(version: V2): FormListInstance {
  const instance = ((formType) =>
    instance.get(formType)) as FormListInstanceImpl;

  instance.get = function get(formType): FormContext {
    return new FormContextImpl(version, formType);
  };

  instance._version = version;
  instance._solution = {};
  instance._uri = ``;

  instance.toJSON = function toJSON() {
    return this._solution;
  };

  instance[inspect.custom] = function inspectImpl(
    _depth: any,
    options: InspectOptions
  ) {
    return inspect(this.toJSON(), options);
  };

  return instance;
}
