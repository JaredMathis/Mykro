import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import {m_js_defined_is} from "./../defined/is.mjs";
import {m_js_properties} from "./../properties.mjs";
import {m_js_string_is} from "./../string/is.mjs";
import {list_contains} from "./../../../list/contains.mjs";
export async function m_js_property_has(o, property_name) {
  await m_js_arguments_assert(m_js_defined_is, m_js_string_is)(arguments);
  let properties = await m_js_properties(o);
  return await list_contains(properties, property_name);
}
