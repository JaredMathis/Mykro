import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import "colors";
import {m_js_defined_is} from "./../defined/is.mjs";
export async function m_js_log_error(e) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  console.log(e.stack.red);
}
