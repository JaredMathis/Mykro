import {js_string_is} from "./../string/is.mjs";
import {js_defined_is} from "./../defined/is.mjs";
import {js_arguments_assert} from "./../arguments/assert.mjs";
export async function js_property_set(object, property_name, property_value) {
  await js_arguments_assert(js_defined_is, js_string_is, js_defined_is)(arguments);
  object[property_name] = property_value;
}
