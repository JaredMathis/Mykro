import {js_assert} from "./assert.mjs";
import {function_call} from "./../function/call.mjs";
import {js_boolean_is} from "./boolean/is.mjs";
export function js_not(_function) {
  return async function wrapped() {
    let result = await function_call(_function, arguments);
    await js_assert(js_boolean_is)(result);
    return !result;
  };
}
