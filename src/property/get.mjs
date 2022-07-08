import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {assert} from "./../assert.mjs";
import {defined_is} from "./../defined/is.mjs";
import {string_is} from "./../string/is.mjs";
export async function property_get(value, property_name) {
  await js_arguments_assert(defined_is, string_is)(arguments);
  let result = value[property_name];
  await assert(defined_is, result);
  return result;
}
