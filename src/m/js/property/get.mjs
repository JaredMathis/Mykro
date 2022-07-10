import {m_js_property_has} from "./has.mjs";
import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import {m_js_assert} from "./../assert.mjs";
import {m_js_defined_is} from "./../defined/is.mjs";
import {m_js_string_is} from "./../string/is.mjs";
export async function m_js_property_get(value, property_name) {
  await m_js_arguments_assert(m_js_defined_is, m_js_string_is)(arguments);
  m_js_assert(m_js_property_has)(value, property_name);
  let result = value[property_name];
  await m_js_assert(m_js_defined_is, result);
  return result;
}
