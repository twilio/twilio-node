import { FlowListInstance } from "./studio/v2/flow.js";
import { FlowValidateListInstance } from "./studio/v2/flowValidate.js";
import { StudioBase } from "./StudioBase.js";

export class Studio extends StudioBase {
  /**
   * @deprecated - Use v2.flows instead
   */
  get flows(): FlowListInstance {
    console.warn("flows is deprecated. Use v2.flows instead.");
    return this.v2.flows;
  }

  /**
   * @deprecated - Use v2.flowValidate instead
   */
  get flowValidate(): FlowValidateListInstance {
    console.warn("flowValidate is deprecated. Use v2.flowValidate instead.");
    return this.v2.flowValidate;
  }
}
