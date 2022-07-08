import {string_is} from "./../is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function string_starts_with(s, prefix) {
  await js_arguments_assert(string_is, string_is)(arguments);
  let result = s.startsWith(prefix);
  return result;
}
