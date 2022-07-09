import {m_js_string_starts_with} from "./../with.mjs";
import {m_js_arguments_assert} from "./../../../arguments/assert.mjs";
import {m_js_string_is} from "./../../is.mjs";
export async function m_js_string_starts_with_ensure(message, prefix_expected) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  if (!await m_js_string_starts_with(message, prefix_expected)) {
    message = prefix_expected + message;
  }
  return message;
}
