import {m_js_equals} from "./equals.mjs";
import {m_js_function_call} from "./function/call.mjs";
import {m_js_error} from "./error.mjs";
export function m_js_returns(_function, expected, data) {
  return async function wrapped() {
    let actual = await m_js_function_call(_function, arguments);
    if (!m_js_equals(actual, expected)) {
      if (data?.value?.then) {
        console.log(`data?.value?.then is a promise, maybe there is a missing await?`.yellow);
      }
      m_js_error(JSON.stringify({
        _function_data: _function.data || _function.name,
        actual,
        expected,
        arguments: Array.from(arguments),
        data
      }));
    }
  };
}
