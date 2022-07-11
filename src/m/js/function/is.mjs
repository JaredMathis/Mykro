import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import {m_js_defined_is} from "./../defined/is.mjs";
export async function m_js_function_is(value) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  return typeof value === "function";
}
