import {equals} from './equals.mjs';

export function returns(_function, expected) {
    return function wrapped() {
        let result = function_call(_function, arguments);
        if (!equals(result, expected)) {
            error(JSON.stringify({result, expected, a:arguments}))
        }
    }
}