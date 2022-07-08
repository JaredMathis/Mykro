import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_assert} from "./../js/assert.mjs";
import {js_defined_is} from "./../js/defined/is.mjs";
import {js_string_is} from "./../js/string/is.mjs";
export async function property_get(value, property_name) {
  await js_arguments_assert(js_defined_is, js_string_is)(arguments);
  let result = value[property_name];
  await js_assert(js_defined_is, result);
  return result;
}
