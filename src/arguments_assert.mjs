import { assert } from "./assert.mjs";
import { equals } from "./equals.mjs";

export function arguments_assert() {
    let asserts = Array.from(arguments);
    return function wrapped() {
        let _arguments = Array.from(arguments);
        assert(equals)(asserts.length, arguments.length);
        asserts.forEach((a, i) => {
            assert(a)(_arguments[i]);
        })
    }
}