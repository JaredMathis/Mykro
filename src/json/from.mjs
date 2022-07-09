import {m_js_string_is} from "./../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
export async function json_from(unparsed) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  return JSON.parse(unparsed);
}
