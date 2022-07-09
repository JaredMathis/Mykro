import {noop} from "./../../noop.mjs";
import {m_js_string_identifier_is} from "./../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {file_js_transform} from "./transform.mjs";
export async function file_js_whitespace(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  await file_js_transform(function_name, noop);
}
