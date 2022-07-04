
import { arguments_assert } from "./arguments_assert.mjs";
import { for_each } from "./for_each.mjs";
import { string_is } from "./string_is.mjs";
import { string_to_list } from "./string_to_list.mjs";
import { list_index_of_starting_at } from "./list_index_of_starting_at.mjs";

export async function string_search_matches(candidate, query) {
    await arguments_assert(string_is, string_is)(arguments);

    let query_as_list = await string_to_list(query);

    let candidate_as_list = await string_to_list(candidate);

    let result = true;

    let index_previous = -1;
    await for_each(query_as_list, async q => {
        let index = await list_index_of_starting_at(candidate_as_list, q, index_previous + 1);
        if (!index.success) {
            result = false;
            return true;
        }
        
        index_previous = index.index;
    });

    return result;
}