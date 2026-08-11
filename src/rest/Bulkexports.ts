import { ExportListInstance } from "./bulkexports/v1/export";
import { ExportConfigurationListInstance } from "./bulkexports/v1/exportConfiguration";
import BulkexportsBase from "./BulkexportsBase";

class Bulkexports extends BulkexportsBase {
  /**
   * @deprecated - Use v1.exports instead
   */
  get exports(): ExportListInstance {
    console.warn("exports is deprecated. Use v1.exports instead.");
    return this.v1.exports;
  }

  /**
   * @deprecated - Use v1.exportConfiguration instead
   */
  get exportConfiguration(): ExportConfigurationListInstance {
    console.warn(
      "exportConfiguration is deprecated. Use v1.exportConfiguration instead."
    );
    return this.v1.exportConfiguration;
  }
}

export = Bulkexports;
