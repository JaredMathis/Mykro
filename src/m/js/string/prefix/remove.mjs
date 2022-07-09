import {m_js_string_from_list} from "./../from/list.mjs";
import {m_js_string_size} from "./../size.mjs";
import {list_starting_at} from "./../../../../list/starting/at.mjs";
import {m_js_string_starts_with} from "./../starts/with.mjs";
import {m_js_string_is} from "./../is.mjs";
import {m_js_arguments_assert} from "./../../arguments/assert.mjs";
import {m_js_assert} from "./../../assert.mjs";
import {m_js_string_to_list} from "./../to/list.mjs";
export async function m_js_string_prefix_remove(input, prefix) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  await m_js_assert(m_js_string_starts_with)(input, prefix);
  let input_as_list = await m_js_string_to_list(input);
  let result_as_list = await list_starting_at(input_as_list, await m_js_string_size(prefix));
  let result = await m_js_string_from_list(result_as_list);
  return result;
}
