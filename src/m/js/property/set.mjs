import {m_js_string_is} from "./../string/is.mjs";
import {m_js_defined_is} from "./../defined/is.mjs";
import {m_js_arguments_assert} from "./../arguments/assert.mjs";
export async function m_js_property_set(object, property_name, property_value) {
  await m_js_arguments_assert(m_js_defined_is, m_js_string_is, m_js_defined_is)(arguments);
  object[property_name] = property_value;
}
