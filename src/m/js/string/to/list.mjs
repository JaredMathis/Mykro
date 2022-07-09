import {m_js_arguments_assert} from "./../../arguments/assert.mjs";
import {m_js_string_is} from "./../is.mjs";
import {m_js_string_split} from "./../split.mjs";
export async function m_js_string_to_list(value) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  let result = await m_js_string_split(value, "");
  return result;
}
