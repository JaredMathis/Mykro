import {mykro_config_path_src_working_get} from "./../../../../../../../mykro/config/path/src/working/get.mjs";
import {list_map} from "./../../../../../../../list/map.mjs";
import {file_js_all} from "./../../../../../all.mjs";
import {file_js_all_for_each_generic} from "./../../../../for/each/generic.mjs";
import {file_js_all_function_names} from "./../../../../function/names.mjs";
import {m_js_arguments_assert} from "./../../../../../../../m/js/arguments/assert.mjs";
import {list_where} from "./../../../../../../../list/where.mjs";
export async function file_js_all_export_declaration_default_for_each() {
  await m_js_arguments_assert()(arguments);
  let path_working = await mykro_config_path_src_working_get();
  let files = await file_js_all();
  let filtered = await await list_where(files, file => file.file_path);
  let function_names = await list_map(files, file => file.name);
  await file_js_all_for_each_generic(function_names, arguments);
}
