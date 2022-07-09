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
import { mykro_config_src_paths_get } from "../../mykro/config/src/paths/get.mjs";
import { list_join } from "../../list/join.mjs";
export async function file_js_all() {
  await js_arguments_assert()(arguments);
  let directories = await mykro_config_src_paths_get();
  let directories_mapped = await list_map(directories, async directory => {
    let directory_files = await file_list(directory);
    let directory_files_mapped = await list_map(directory_files, async file_path => {
      return {
        without_directory: await js_string_prefix_remove(file_path, directory + "\\"),
        file_path
      }
    })
    return directory_files_mapped;
  })
  let files = await list_join(directories_mapped);
  let mapped = await list_map(files, async f => {
    let dir_name = await file_path_dirname(f.without_directory);
    let normalized = await file_path_normalize(dir_name + "\\" + path_file_name(f.without_directory));
    let name = await js_string_replace_all(normalized, "\\", "_");
    return {
      name,
      file_path: f.file_path,
      extension: await path_file_extension(f.file_path)
    };
  });
  let filtered = await list_where(mapped, async m => m.extension === await file_js_extension());
  return filtered;
}
