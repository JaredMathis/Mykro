
import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";

export async function string_size(s) {
    await arguments_assert(string_is)(arguments);

    return s.length;
}