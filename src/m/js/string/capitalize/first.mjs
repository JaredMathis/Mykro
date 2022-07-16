import {m_js_string_listify} from "./../listify.mjs";
import {list_starting_at} from "./../../../../list/starting/at.mjs";
import {m_js_string_is} from "./../is.mjs";
import {m_js_arguments_assert} from "./../../arguments/assert.mjs";
export async function m_js_string_capitalize_first(s) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  if (await string_size(s) === 0) {
    return s;
  }
  return s[0] + await m_js_string_listify(async l => await list_starting_at(l, 1));
}
