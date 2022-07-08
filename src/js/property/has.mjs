import {js_arguments_assert} from "./../arguments/assert.mjs";
import {js_defined_is} from "./../defined/is.mjs";
import {js_properties} from "./../properties.mjs";
import {string_is} from "./../../string/is.mjs";
import {list_contains} from "./../../list/contains.mjs";
export async function js_property_has(o, property_name) {
  await js_arguments_assert(js_defined_is, string_is)(arguments);
  let properties = await js_properties(o);
  return await list_contains(properties, property_name);
}
