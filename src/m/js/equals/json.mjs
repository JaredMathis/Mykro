import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import {m_js_defined_is} from "./../defined/is.mjs";
import {m_js_equals} from "./../equals.mjs";
import {json_to} from "./../../../json/to.mjs";
export async function m_js_equals_json(a, b) {
  await m_js_arguments_assert(m_js_defined_is, m_js_defined_is)(arguments);
  return m_js_equals(await json_to(a), await json_to(b));
}
