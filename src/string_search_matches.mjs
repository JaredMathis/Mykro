
import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";
import { string_split } from "./string_split.mjs";

export async function string_search_matches(candidate, query) {
    await arguments_assert(string_is, string_is)(arguments);

    let split = string_split(query, '');
    // TODO
}