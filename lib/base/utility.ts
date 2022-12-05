export const trim = (str, c = "\\s") =>
  str.replace(new RegExp(`^([${c}]*)(.*?)([${c}]*)$`), "$2");

export function isValidPathParam(param: string): boolean {
  return (
    param !== null &&
    param !== undefined &&
    !param.includes("/") &&
    !param.includes("?")
  );
}
