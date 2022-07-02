import { assert } from "./assert.mjs";
import { equals } from "./equals.mjs";

export function boolean_is(b) {
    assert(equals)(arguments.length, 1);
    return [true, false].includes(b);
}