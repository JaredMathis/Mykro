import {equals} from './equals.mjs';
import {function_call} from './function_call.mjs';
import {error} from './error.mjs';

export function returns(_function, expected, data) {
    return async function wrapped() {
        let actual = await function_call(_function, arguments);
        if (!equals(actual, expected)) {
            error(JSON.stringify({
                _function_data:_function.data || _function.name,
                actual, 
                expected, 
                arguments:Array.from(arguments),
                data
            }))
        }
    }
}