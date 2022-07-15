import {m_js_function_is} from "./../../../is.mjs";
import {m_js_arguments_assert} from "./../../../../arguments/assert.mjs";
export async function m_js_function_call_arguments_first_2(_function) {
  await m_js_arguments_assert(m_js_function_is)(arguments);
  return function wrapped(a, b) {
    return _function(a, b);
  };
}
