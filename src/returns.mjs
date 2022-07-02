import {equals} from './equals.mjs';
import {function_call} from './function_call.mjs';
import {error} from './error.mjs';

export async function returns(_function, expected, data) {
    return function wrapped() {
        let result = await function_call(_function, arguments);
        if (!equals(result, expected)) {
            error(JSON.stringify({
                _function_name:_function.name,
                result, 
                expected, 
                a:Array.from(arguments),
                data
            }))
        }
    }
}