import {js_equals} from "./js/equals.mjs";
import {function_call} from "./function/call.mjs";
import {js_error} from "./js/error.mjs";
import _ from "lodash";
export function returns(_function, expected, data) {
  return async function wrapped() {
    let actual = await function_call(_function, arguments);
    if (!js_equals(actual, expected)) {
      if (data?.value?.then) {
        console.log(`data?.value?.then is a promise, maybe there is a missing await?`.yellow);
      }
      js_error(JSON.stringify({
        _function_data: _function.data || _function.name,
        actual,
        expected,
        arguments: Array.from(arguments),
        data
      }));
    }
  };
}
