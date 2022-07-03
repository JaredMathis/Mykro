import {equals} from './equals.mjs';
import {function_call} from './function_call.mjs';
import {error} from './error.mjs';

export function returns(_function, expected, data) {
    return async function wrapped() {
        let result = await function_call(_function, arguments);
        if (!equals(result, expected)) {
            error(JSON.stringify({
                _function_data:_function.data || _function.name,
                result, 
                expected, 
                arguments:Array.from(arguments),
                data
            }))
        }
    }
}