import { assert } from "./assert.mjs";
import { function_call } from "./function_call.mjs";
import { boolean_is } from "./boolean_is.mjs";

export function not(_function) {
    return function wrapped() {
        let result = function_call(_function, arguments);
        assert(boolean_is)(result);
        return !result;
    }
}