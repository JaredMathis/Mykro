import {file_js_export_identifier_rename_to_file_path_generic} from "./generic.mjs";
import {m_js_string_identifier_is} from "./../../../../../../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../../../../../../m/js/arguments/assert.mjs";
export async function file_js_export_identifier_rename_to_file_path_quick(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  await file_js_export_identifier_rename_to_file_path_generic(function_name, true);
}
