import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_defined_is} from "./../js/defined/is.mjs";
export async function json_to(value) {
  await js_arguments_assert(js_defined_is)(arguments);
  return JSON.stringify(value, null, 2);
}
