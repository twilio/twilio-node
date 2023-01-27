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
});
