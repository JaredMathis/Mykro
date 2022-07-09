import {m_js_string_from_list} from "./../../from/list.mjs";
import {m_js_string_size} from "./../../size.mjs";
import {list_starting_at} from "./../../../../../list/starting/at.mjs";
import {m_js_string_to_list} from "./../../to/list.mjs";
import {m_js_string_starts_with} from "./../../starts/with.mjs";
import {m_js_arguments_assert} from "./../../../arguments/assert.mjs";
import {m_js_string_is} from "./../../is.mjs";
export async function m_js_string_prefix_if_remove(s, prefix) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  if (await m_js_string_starts_with(s, prefix)) {
    let stdout_as_list = await m_js_string_to_list(s);
    let sublist = await list_starting_at(stdout_as_list, await m_js_string_size(prefix));
    s = await m_js_string_from_list(sublist);
  }
  return s;
}
