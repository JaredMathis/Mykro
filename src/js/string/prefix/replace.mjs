import {js_string_is} from "./../is.mjs";
import {js_arguments_assert} from "./../../arguments/assert.mjs";
import {js_string_prefix_remove} from "./remove.mjs";
export async function js_string_prefix_replace(input, prefix_old, prefix_new) {
  await js_arguments_assert(js_string_is, js_string_is, js_string_is)(arguments);
  let result = await js_string_prefix_remove(input, prefix_old);
  return prefix_new + result;
}
