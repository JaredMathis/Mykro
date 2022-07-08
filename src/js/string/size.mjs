import {js_arguments_assert} from "./../arguments/assert.mjs";
import {js_string_is} from "./is.mjs";
export async function js_string_size(s) {
  await js_arguments_assert(js_string_is)(arguments);
  return s.length;
}
