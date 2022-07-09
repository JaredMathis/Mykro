import {m_js_string_is} from "./../is.mjs";
import {m_js_arguments_assert} from "./../../arguments/assert.mjs";
import {m_js_string_prefix_remove} from "./remove.mjs";
export async function m_js_string_prefix_replace(input, prefix_old, prefix_new) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is, m_js_string_is)(arguments);
  let result = await m_js_string_prefix_remove(input, prefix_old);
  return prefix_new + result;
}
