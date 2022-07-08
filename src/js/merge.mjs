import {js_defined_is} from "./defined/is.mjs";
import {js_arguments_assert} from "./arguments/assert.mjs";
import {js_properties} from "./properties.mjs";
import {js_for_each} from "./for/each.mjs";
import {js_property_set} from "./property/set.mjs";
import {property_get} from "./../property/get.mjs";
export async function js_merge(into, from) {
  await js_arguments_assert(js_defined_is, js_defined_is)(arguments);
  let properties = await js_properties(from);
  await js_for_each(properties, async property_name => {
    let property_value = await property_get(from, property_name);
    await js_property_set(into, property_name, property_value);
  });
}
