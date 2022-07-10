import {file_js_export_identifier_rename_to_file_path_generic} from "./path/generic.mjs";
import {file_js_all_identifier_rename} from "./../../../../../all/identifier/rename.mjs";
import {es_traverse} from "./../../../../../../../es/traverse.mjs";
import {file_js_transform} from "./../../../../../transform.mjs";
import {m_js_string_identifier_is} from "./../../../../../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../../../../../m/js/arguments/assert.mjs";
import {list_add} from "./../../../../../../../list/add.mjs";
import {m_js_equals} from "./../../../../../../../m/js/equals.mjs";
import {list_size} from "./../../../../../../../list/size.mjs";
import {list_single} from "./../../../../../../../list/single.mjs";
export async function file_js_export_identifier_rename_to_file_path(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  await file_js_export_identifier_rename_to_file_path_generic(function_name, false);
}
