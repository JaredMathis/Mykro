import {js_string_is} from "./../is.mjs";
import {js_arguments_assert} from "./../../arguments/assert.mjs";
export async function js_string_starts_with(s, prefix) {
  await js_arguments_assert(js_string_is, js_string_is)(arguments);
  let result = s.startsWith(prefix);
  return result;
}
