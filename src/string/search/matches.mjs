import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {for_each} from "./../../for/each.mjs";
import {string_is} from "./../is.mjs";
import {string_to_list} from "./../to/list.mjs";
import {list_index_of_starting_at} from "./../../list/index/of/starting/at.mjs";
export async function string_search_matches(candidate, query) {
  await js_arguments_assert(string_is, string_is)(arguments);
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
