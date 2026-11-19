import { isValidPathParam } from "../../../src/base/utility";

describe("isValidPathParam", () => {
  it("should validate path params", () => {
    expect(isValidPathParam(null)).toBeFalsy();
    expect(isValidPathParam(undefined)).toBeFalsy();
    expect(isValidPathParam("with/slash")).toBeFalsy();
    expect(isValidPathParam("with?question")).toBeFalsy();

    expect(isValidPathParam("AC123")).toBeTruthy();
    expect(isValidPathParam("space in name")).toBeTruthy();
    expect(isValidPathParam(123)).toBeTruthy();
    expect(isValidPathParam({})).toBeTruthy();
  });

  it("should allow typical valid path params", () => {
    expect(isValidPathParam("FW00000000000000000000000000000000")).toBeTruthy();
    expect(isValidPathParam("+15551234567")).toBeTruthy();
    expect(isValidPathParam("my name.txt")).toBeTruthy();
    expect(isValidPathParam(123)).toBeTruthy();
    expect(isValidPathParam("...")).toBeTruthy();
  });

  it("should reject injection-prone path params", () => {
    expect(isValidPathParam(null)).toBeFalsy();
    expect(isValidPathParam(undefined)).toBeFalsy();
    expect(isValidPathParam("")).toBeFalsy();
    expect(isValidPathParam(".")).toBeFalsy();
    expect(isValidPathParam("..")).toBeFalsy();
    expect(isValidPathParam("a/b")).toBeFalsy();
    expect(isValidPathParam("a?b")).toBeFalsy();
    expect(isValidPathParam("a#b")).toBeFalsy();
    expect(isValidPathParam("../x")).toBeFalsy();
    expect(isValidPathParam("FW0/Executions/FN0/Context?x=1")).toBeFalsy();
  });
});
