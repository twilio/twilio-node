import builder from "xmlbuilder";

/* jshint ignore:start */
/**
 * Parent TwiML object
 */
/* jshint ignore:end */

export default class TwiML {
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

  /* jshint ignore:start */
  /**
   * Because child elements have properties named after their class names, we need
   * to translate that when we want to access that at the parent prototype level.
   * So this will translate something like Say to 'say' and VoiceResponse to
   * 'response'.
   */
  /* jshint ignore:end */
  _getXml() {
    // @ts-ignore
    return this[this._propertyName];
  }

  /* jshint ignore:start */
  /**
   * Convert to TwiML
   *
   * @returns TwiML XML
   */
  /* jshint ignore:end */
  toString() {
    return this._getXml().end();
  }

  /* jshint ignore:start */
  /**
   * Add text under the TwiML node
   *
   * @param {string} content
   */
  /* jshint ignore:end */
  addText(content: string) {
    this._getXml().txt(content);
  }

  /* jshint ignore:start */
  /**
   * Add an arbitrary tag as a child.
   *
   * @param {string} content
   */
  /* jshint ignore:end */
  addChild(tagName: string, attributes: Object) {
    return new GenericNode(this._getXml().ele(tagName, attributes));
  }
}

/* jshint ignore:start */
/**
 * Generic node
 */
/* jshint ignore:end */
class GenericNode extends TwiML {
  // must match variable name for _getPropertyName
  constructor(public node: any) {
    super();
    this._propertyName = "node";
  }
}
