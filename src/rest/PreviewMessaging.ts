import PreviewMessagingBase from "./PreviewMessagingBase";
import {MessageListInstance} from "./previewMessaging/v1/message";

class PreviewMessaging extends PreviewMessagingBase {
  /**
   * @deprecated - Use v1.messages; instead
   */
  get messages(): MessageListInstance {
    console.warn(
        "messages is deprecated. Use v1.messages; instead."
    );
    return this.v1.messages;
  }
}
export = PreviewMessaging
