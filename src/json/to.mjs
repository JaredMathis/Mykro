import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../m/js/defined/is.mjs";
export async function json_to(value) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  return JSON.stringify(value, null, 2);
}
