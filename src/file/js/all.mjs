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
import { file_js_all_generic } from "./all/generic.mjs";
export async function file_js_all() {
  await js_arguments_assert()(arguments);
  let directories = await mykro_config_src_paths_get();
  return await file_js_all_generic(directories);
}
