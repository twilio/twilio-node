/*
 * This code was generated by
 * ___ _ _ _ _ _    _ ____    ____ ____ _    ____ ____ _  _ ____ ____ ____ ___ __   __
 *  |  | | | | |    | |  | __ |  | |__| | __ | __ |___ |\ | |___ |__/ |__|  | |  | |__/
 *  |  |_|_| | |___ | |__|    |__| |  | |    |__] |___ | \| |___ |  \ |  |  | |__| |  \
 *
 * Twilio - Bulkexports
 * This is the public Twilio REST API.
 *
 * NOTE: This class is auto generated by OpenAPI Generator.
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { inspect, InspectOptions } from "util";
import V1 from "../V1";
const deserialize = require("../../../base/deserialize");
const serialize = require("../../../base/serialize");
import { JobListInstance } from "./export/job";

import { ExportConfigurationListInstance } from "./export/exportConfiguration";
import { ExportCustomJobListInstance } from "./export/exportCustomJob";
import { DayListInstance } from "./export/day";



export interface ExportListInstance {
  (resourceType: string): ExportContext;
  get(resourceType: string): ExportContext;

  jobs: JobListInstance;

  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExportSolution {
}

interface ExportListInstanceImpl extends ExportListInstance {}
class ExportListInstanceImpl implements ExportListInstance {
  _version?: V1;
  _solution?: ExportSolution;
  _uri?: string;

  _jobs?: JobListInstance;
}

export function ExportListInstance(version: V1): ExportListInstance {
  const instance = ((resourceType) => instance.get(resourceType)) as ExportListInstanceImpl;

  instance.get = function get(resourceType): ExportContext {
    return new ExportContextImpl(version, resourceType);
  }

  instance._version = version;
  instance._solution = {  };
  instance._uri = `/Exports`;

  Object.defineProperty(instance, "jobs", {
    get: function jobs() {
      if (!this._jobs) {
        this._jobs = JobListInstance(this._version);
      }
      return this._jobs;
    }
  });

  instance.toJSON = function toJSON() {
    return this._solution;
  }

  instance[inspect.custom] = function inspectImpl(_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }

  return instance;
}


export interface ExportContext {

  exportConfiguration: ExportConfigurationListInstance;
  exportCustomJobs: ExportCustomJobListInstance;
  days: DayListInstance;

  /**
   * Fetch a ExportInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExportInstance
   */
  fetch(callback?: (error: Error | null, item?: ExportInstance) => any): Promise<ExportInstance>


  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  [inspect.custom](_depth: any, options: InspectOptions): any;
}

export interface ExportContextSolution {
  resourceType?: string;
}

export class ExportContextImpl implements ExportContext {
  protected _solution: ExportContextSolution;
  protected _uri: string;

  protected _exportConfiguration?: ExportConfigurationListInstance;
  protected _exportCustomJobs?: ExportCustomJobListInstance;
  protected _days?: DayListInstance;

  constructor(protected _version: V1, resourceType: string) {
    this._solution = { resourceType };
    this._uri = `/Exports/${resourceType}`;
  }

  get exportConfiguration(): ExportConfigurationListInstance {
    this._exportConfiguration = this._exportConfiguration || ExportConfigurationListInstance(this._version, this._solution.resourceType);
    return this._exportConfiguration;
  }

  get exportCustomJobs(): ExportCustomJobListInstance {
    this._exportCustomJobs = this._exportCustomJobs || ExportCustomJobListInstance(this._version, this._solution.resourceType);
    return this._exportCustomJobs;
  }

  get days(): DayListInstance {
    this._days = this._days || DayListInstance(this._version, this._solution.resourceType);
    return this._days;
  }

  fetch(callback?: any): Promise<ExportInstance> {
  
    let operationVersion = this._version,
        operationPromise = operationVersion.fetch({ uri: this._uri, method: 'get' });
    
    operationPromise = operationPromise.then(payload => new ExportInstance(operationVersion, payload, this._solution.resourceType));
    

    operationPromise = this._version.setPromiseCallback(operationPromise,callback);
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

interface ExportPayload extends ExportResource{
}

interface ExportResource {
  resource_type?: string | null;
  url?: string | null;
  links?: object | null;
}

export class ExportInstance {
  protected _solution: ExportContextSolution;
  protected _context?: ExportContext;

  constructor(protected _version: V1, payload: ExportPayload, resourceType?: string) {
    this.resourceType = payload.resource_type;
    this.url = payload.url;
    this.links = payload.links;

    this._solution = { resourceType: resourceType || this.resourceType };
  }

  /**
   * The type of communication – Messages, Calls, Conferences, and Participants
   */
  resourceType?: string | null;
  /**
   * The URL of this resource.
   */
  url?: string | null;
  /**
   * Nested resource URLs.
   */
  links?: object | null;

  private get _proxy(): ExportContext {
    this._context = this._context || new ExportContextImpl(this._version, this._solution.resourceType);
    return this._context;
  }

  /**
   * Fetch a ExportInstance
   *
   * @param { function } [callback] - Callback to handle processed record
   *
   * @returns { Promise } Resolves to processed ExportInstance
   */
  fetch(callback?: (error: Error | null, item?: ExportInstance) => any): Promise<ExportInstance>
     {
    return this._proxy.fetch(callback);
  }

  /**
   * Access the exportConfiguration.
   */
  exportConfiguration(): ExportConfigurationListInstance {
    return this._proxy.exportConfiguration;
  }

  /**
   * Access the exportCustomJobs.
   */
  exportCustomJobs(): ExportCustomJobListInstance {
    return this._proxy.exportCustomJobs;
  }

  /**
   * Access the days.
   */
  days(): DayListInstance {
    return this._proxy.days;
  }

  /**
   * Provide a user-friendly representation
   *
   * @returns Object
   */
  toJSON() {
    return {
      resourceType: this.resourceType, 
      url: this.url, 
      links: this.links
    }
  }

  [inspect.custom](_depth: any, options: InspectOptions) {
    return inspect(this.toJSON(), options);
  }
}



