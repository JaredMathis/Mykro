
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";

export async function test(a) {
    await arguments_assert(defined_is)(arguments);
    // TODO
}