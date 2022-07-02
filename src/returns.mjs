import {equals} from './equals.mjs';
import {function_call} from './function_call.mjs';
import {error} from './error.mjs';

export function returns(_function, expected, data) {
    return function wrapped() {
        let result = function_call(_function, arguments);
        if (!equals(result, expected)) {
            error(JSON.stringify({
                result, 
                expected, 
                a:Array.from(arguments),
                data
            }))
        }
    }
}