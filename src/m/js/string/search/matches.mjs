import {m_js_arguments_assert} from "./../../arguments/assert.mjs";
import {m_js_for_each} from "./../../for/each.mjs";
import {m_js_string_is} from "./../is.mjs";
import {m_js_string_to_list} from "./../to/list.mjs";
import {list_index_of_starting_at} from "./../../../../list/index/of/starting/at.mjs";
export async function m_js_string_search_matches(candidate, query) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  let query_as_list = await m_js_string_to_list(query);
  let candidate_as_list = await m_js_string_to_list(candidate);
  let result = true;
  let index_previous = -1;
  await m_js_for_each(query_as_list, async q => {
    let index = await list_index_of_starting_at(candidate_as_list, q, index_previous + 1);
    if (!index.success) {
      result = false;
      return true;
    }
    index_previous = index.index;
  });
  return result;
}
