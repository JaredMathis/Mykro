import {m_js_defined_is} from "./defined/is.mjs";
import {m_js_arguments_assert} from "./arguments/assert.mjs";
import {m_js_properties} from "./properties.mjs";
import {m_js_for_each} from "./for/each.mjs";
import {m_js_property_set} from "./property/set.mjs";
import {property_get} from "./../../property/get.mjs";
export async function m_js_merge(into, from) {
  await m_js_arguments_assert(m_js_defined_is, m_js_defined_is)(arguments);
  let properties = await m_js_properties(from);
  await m_js_for_each(properties, async property_name => {
    let property_value = await property_get(from, property_name);
    await m_js_property_set(into, property_name, property_value);
  });
}
