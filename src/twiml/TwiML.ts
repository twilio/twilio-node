import builder from "xmlbuilder";
/**
 * Parent TwiML object
 */
export class TwiML {
  [key: string]: any;
  response: any;
  _propertyName: string;

  constructor() {
    this._propertyName = "";
    this.response = builder
      .create("Response", {
        stringify: {
          attValue: function (value) {
            if (Array.isArray(value)) {
              value = value.join(" ");
            }
            return this.attEscape?.("" + value || "") || "";
          },
        },
      })
      .dec("1.0", "UTF-8");
  }
  /**
   * Because child elements have properties named after their class names, we need
   * to translate that when we want to access that at the parent prototype level.
   * So this will translate something like Say to 'say' and VoiceResponse to
   * 'response'.
   */
  _getXml() {
    return this[this._propertyName];
  }
  /**
   * Convert to TwiML
   *
   * @returns TwiML XML
   */
  toString(): string {
    return this._getXml().end();
  }
  /**
   * Add text under the TwiML node
   *
   * @param {string} content
   */
  addText(content: string) {
    this._getXml().txt(content);
  }
  /**
   * Add an arbitrary tag as a child.
   *
   * @param {string} content
   */
  addChild(tagName: string, attributes: Object) {
    return new GenericNode(this._getXml().ele(tagName, attributes));
  }
}
/**
 * Generic node
 */
class GenericNode extends TwiML {
  // must match variable name for _getPropertyName
  constructor(public node: any) {
    super();
    this._propertyName = "node";
  }
}
