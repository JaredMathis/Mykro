
import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";
import { string_split } from "./string_split.mjs";

export async function string_to_list(value) {
    await arguments_assert(string_is)(arguments);

    let result = string_split(value, '');

    return result;
}