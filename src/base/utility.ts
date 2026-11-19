const INVALID_PATH_PARAM_CHARS = ["/", "?", "#"];

export const trim = (str: string, c = "\\s") =>
  str.replace(new RegExp(`^([${c}]*)(.*?)([${c}]*)$`), "$2");

export function isValidPathParam(param: any): boolean {
  if (param === null || param === undefined) return false;

  const paramString = param.toString();

  if (paramString === "" || paramString === "." || paramString === "..")
    return false;

  return INVALID_PATH_PARAM_CHARS.every(
    (invalidChar) => !paramString.includes(invalidChar)
  );
}
