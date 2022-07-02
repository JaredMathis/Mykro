import { assert } from "./assert.mjs";
import { equals } from "./equals.mjs";

export function arguments_assert() {
    let asserters = Array.from(arguments);
    return function wrapped() {
        let _arguments = Array.from(arguments[0]);
        assert(equals)(asserters.length, arguments.length);
        asserters.forEach((asserter, i) => {
            let value = _arguments[i];
            assert(asserter, {i, a: asserter, value})(value);
        })
    }
}