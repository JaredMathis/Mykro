
import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";
import { string_to_list } from "./string_to_list.mjs";

export async function string_search_matches(candidate, query) {
    await arguments_assert(string_is, string_is)(arguments);

    let split = string_to_list(query);
    // TODO
}