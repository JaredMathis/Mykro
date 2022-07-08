import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {string_is} from "./is.mjs";
export async function string_size(s) {
  await js_arguments_assert(string_is)(arguments);
  return s.length;
}
