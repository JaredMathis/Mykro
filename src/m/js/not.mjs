import {m_js_assert} from "./assert.mjs";
import {m_js_function_call} from "./function/call.mjs";
import {m_js_boolean_is} from "./boolean/is.mjs";
export function m_js_not(_function) {
  return async function wrapped() {
    let result = await m_js_function_call(_function, arguments);
    await m_js_assert(m_js_boolean_is)(result);
    return !result;
  };
}
