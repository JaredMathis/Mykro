import {assert} from "./assert.mjs";
import {function_call} from "./function/call.mjs";
import {js_boolean_is} from "./js/boolean/is.mjs";
export function not(_function) {
  return async function wrapped() {
    let result = await function_call(_function, arguments);
    await assert(js_boolean_is)(result);
    return !result;
  };
}
