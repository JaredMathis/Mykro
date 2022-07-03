import {equals} from './equals.mjs';
import {function_call} from './function_call.mjs';
import {error} from './error.mjs';
import _ from 'lodash';
import { defined_is } from './defined_is.mjs';

export function returns(_function, expected, data) {
    return async function wrapped() {
        let actual = await function_call(_function, arguments);
        if (!equals(actual, expected)) {
            if (data?.value?.then) {
                console.log(`data?.value?.then is a promise, maybe there is a missing await?`.yellow);
            }
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