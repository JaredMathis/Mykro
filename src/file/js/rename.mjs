import {m_js_not} from "./../../m/js/not.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {m_js_assert} from "./../../m/js/assert.mjs";
import {m_js_equals} from "./../../m/js/equals.mjs";
import {m_js_string_identifier_is} from "./../../m/js/string/identifier/is.mjs";
import {file_js_all_identifier_rename} from "./all/identifier/rename.mjs";
import {file_js_move} from "./move.mjs";
export async function file_js_rename(function_name, function_name_new) {
  await m_js_arguments_assert(m_js_string_identifier_is, m_js_string_identifier_is)(arguments);
  await file_js_all_identifier_rename(function_name, function_name_new);
  await file_js_move(function_name, function_name_new);
}
