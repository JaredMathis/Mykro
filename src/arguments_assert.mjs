import { assert } from "./assert.mjs";
import { equals } from "./equals.mjs";

export function arguments_assert() {
    let asserters = Array.from(arguments);
    return async function wrapped() {
        let _arguments = Array.from(arguments[0]);
        await assert(equals)(asserters.length, _arguments.length);
        await Promise.all(asserters.map(async (asserter, i) => {
            let value = _arguments[i];
            await assert(asserter, {i, a: asserter, value})(value);
        }))
    }
}