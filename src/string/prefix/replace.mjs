import {string_is} from "./../is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {string_prefix_remove} from "./remove.mjs";
export async function string_prefix_replace(input, prefix_old, prefix_new) {
  await js_arguments_assert(string_is, string_is, string_is)(arguments);
  let result = await string_prefix_remove(input, prefix_old);
  return prefix_new + result;
}
