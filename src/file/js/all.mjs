import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {file_list} from "./../list.mjs";
import {path_file_name} from "./../../path/file/name.mjs";
import {path_file_extension} from "./../../path/file/extension.mjs";
import {list_map} from "./../../list/map.mjs";
import {list_where} from "./../../list/where.mjs";
import {mykro_config_src_path_get} from "./../../mykro/config/src/path/get.mjs";
import {file_js_extension} from "./extension.mjs";
import {file_path_dirname} from "./../path/dirname.mjs";
import {js_string_prefix_remove} from "./../../js/string/prefix/remove.mjs";
import {file_path_normalize} from "./../path/normalize.mjs";
import {js_string_replace_all} from "./../../js/string/replace/all.mjs";
export async function file_js_all() {
  await js_arguments_assert()(arguments);
  let directory = await mykro_config_src_path_get();
  let files = await file_list(directory);
  let mapped = await list_map(files, async f => {
    let dir_name = await file_path_dirname(f);
    dir_name = await js_string_prefix_remove(dir_name, directory);
    let normalized = await file_path_normalize(dir_name + "\\" + path_file_name(f));
    let name = await js_string_prefix_remove(normalized, "\\");
    name = await js_string_replace_all(name, "\\", "_");
    return {
      name,
      file_path: f,
      extension: await path_file_extension(f)
    };
  });
  let filtered = await list_where(mapped, async m => m.extension === await file_js_extension());
  return filtered;
}
