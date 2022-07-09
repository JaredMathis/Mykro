import {m_js_arguments_assert} from "./arguments/assert.mjs";
import {m_js_defined_is} from "./defined/is.mjs";
export async function m_js_properties(o) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  return Object.keys(o);
}
