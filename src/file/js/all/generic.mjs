import {file_js_extension} from "./../extension.mjs";
import {list_where} from "./../../../list/where.mjs";
import {path_file_extension} from "./../../../path/file/extension.mjs";
import {m_js_string_replace_all} from "./../../../m/js/string/replace/all.mjs";
import {path_file_name} from "./../../../path/file/name.mjs";
import {file_path_normalize} from "./../../path/normalize.mjs";
import {file_path_dirname} from "./../../path/dirname.mjs";
import {list_join} from "./../../../list/join.mjs";
import {m_js_string_prefix_remove} from "./../../../m/js/string/prefix/remove.mjs";
import {file_list} from "./../../list.mjs";
import {list_map} from "./../../../list/map.mjs";
import {list_is} from "./../../../list/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function file_js_all_generic(directories) {
  await m_js_arguments_assert(list_is)(arguments);
  let directories_mapped = await list_map(directories, async directory => {
    let directory_files = await file_list(directory);
    let directory_files_mapped = await list_map(directory_files, async file_path => {
      return {
        without_directory: await m_js_string_prefix_remove(file_path, directory + "\\"),
        file_path
      };
    });
    return directory_files_mapped;
  });
  let files = await list_join(directories_mapped);
  let mapped = await list_map(files, async f => {
    let dir_name = await file_path_dirname(f.without_directory);
    let normalized = await file_path_normalize(dir_name + "\\" + path_file_name(f.without_directory));
    let name = await m_js_string_replace_all(normalized, "\\", "_");
    return {
      name,
      file_path: f.file_path,
      extension: await path_file_extension(f.file_path)
    };
  });
  let filtered = await list_where(mapped, async m => m.extension === await file_js_extension());
  return filtered;
}
