import {assert} from "./assert.mjs";
import {function_call} from "./function/call.mjs";
import {boolean_is} from "./boolean/is.mjs";
export function not(_function) {
  return async function wrapped() {
    let result = await function_call(_function, arguments);
    await assert(boolean_is)(result);
    return !result;
  };
}
