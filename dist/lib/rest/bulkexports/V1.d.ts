import BulkexportsBase from "../BulkexportsBase";
import Version from "../../base/Version";
import { ExportListInstance } from "./v1/export";
import { ExportConfigurationListInstance } from "./v1/exportConfiguration";
export default class V1 extends Version {
    /**
     * Initialize the V1 version of Bulkexports
     *
     * @property { Twilio.Bulkexports.V1.ExportListInstance } exports - exports resource
     * @property { Twilio.Bulkexports.V1.ExportConfigurationListInstance } exportConfiguration - exportConfiguration resource
     *
     * @param { Twilio.Bulkexports } domain - The Twilio domain
     */
    constructor(domain: BulkexportsBase);
    protected _exports?: ExportListInstance;
    protected _exportConfiguration?: ExportConfigurationListInstance;
    get exports(): ExportListInstance;
    get exportConfiguration(): ExportConfigurationListInstance;
}
