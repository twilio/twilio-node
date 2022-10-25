export const trim = (str, c = '\\s') => str.replace(new RegExp(`^([${c}]*)(.*?)([${c}]*)$`), '$2');
