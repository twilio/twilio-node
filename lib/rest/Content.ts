import ContentBase from "./ContentBase";
import { ContentListInstance } from "./content/v1/content";

class Content extends ContentBase {
  /**
   * @deprecated - Use v1.contents instead
   */
  get contents(): ContentListInstance {
    console.warn("contents is deprecated. Use v1.contents instead.");
    return this.v1.contents;
  }
}

export = Content;
