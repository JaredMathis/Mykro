import {m_js_arguments_assert} from "./../arguments/assert.mjs";
export async function m_js_string_capitalize(input) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  let words = m_js_string_split(input, " ");
}
