import {m_js_string_join} from "./join.mjs";
import {list_map} from "./../../../list/map.mjs";
import {m_js_string_split} from "./split.mjs";
import {m_js_string_is} from "./is.mjs";
import {m_js_arguments_assert} from "./../arguments/assert.mjs";
export async function m_js_string_capitalize(input) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  let split_by = " ";
  let words = await m_js_string_split(input, split_by);
  let mapped = await list_map(words, m_js_string_capitalize_first);
  let result = await m_js_string_join(mapped, split_by);
  return result;
}
