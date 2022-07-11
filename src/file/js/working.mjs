import {list_map} from "./../../list/map.mjs";
import {m_js_string_starts_with} from "./../../m/js/string/starts/with.mjs";
import {list_where} from "./../../list/where.mjs";
import {file_js_all} from "./all.mjs";
import {mykro_config_path_src_working_get} from "./../../mykro/config/path/src/working/get.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function file_js_working() {
  await m_js_arguments_assert()(arguments);
  let path_working = await mykro_config_path_src_working_get();
  let files = await file_js_all();
  let filtered = await await list_where(files, async file => await m_js_string_starts_with(file.file_path, path_working));
  return filtered;
}
