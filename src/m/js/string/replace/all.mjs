import {m_js_string_join} from "./../join.mjs";
import {m_js_string_is} from "./../is.mjs";
import {m_js_arguments_assert} from "./../../arguments/assert.mjs";
import {m_js_string_split} from "./../split.mjs";
export async function m_js_string_replace_all(input, search, replacement) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is, m_js_string_is)(arguments);
  let split = await m_js_string_split(input, search);
  return await m_js_string_join(split, replacement);
}
