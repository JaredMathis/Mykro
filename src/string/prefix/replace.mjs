import {string_is} from "./../is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function string_prefix_replace(value, prefix_old, prefix_new) {
  await js_arguments_assert(string_is, string_is, string_is)(arguments);
}
