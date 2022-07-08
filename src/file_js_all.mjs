import {arguments_assert} from "./arguments_assert.mjs";
import {file_list} from "./file_list.mjs";
import {path_file_name} from "./path_file_name.mjs";
import {path_file_extension} from "./path_file_extension.mjs";
import {list_map} from "./list_map.mjs";
import {list_where} from "./list_where.mjs";
import {mykro_config_src_path_get} from "./mykro_config_src_path_get.mjs";
import {file_js_extension} from "./file_js_extension.mjs";
import {file_path_dirname} from "./file_path_dirname.mjs";
import {string_prefix_remove} from "./string_prefix_remove.mjs";
import {file_path_normalize} from "./file_path_normalize.mjs";
import {string_replace_all} from "./string_replace_all.mjs";
export async function file_js_all() {
  await arguments_assert()(arguments);
  let directory = await mykro_config_src_path_get();
  let files = await file_list(directory);
  let mapped = await list_map(files, async f => {
    let dir_name = await file_path_dirname(f);
    dir_name = await string_prefix_remove(dir_name, directory)
    let normalized = await file_path_normalize(dir_name + "\\" + path_file_name(f));
    let name = await string_prefix_remove(normalized, '\\');
    name = await string_replace_all(name, '\\', '_');
    return {
      name,
      file_path: f,
      extension: await path_file_extension(f)
    };
  });
  let filtered = await list_where(mapped, async m => m.extension === await file_js_extension());
  return filtered;
}