import {list_add} from "./../../../../list/add.mjs";
import {mykro_config_src_other_get} from "./../other/get.mjs";
import {mykro_config_src_path_get} from "./../path/get.mjs";
import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
export async function mykro_config_src_paths_get() {
  await js_arguments_assert()(arguments);
  let mykro_directory = await mykro_config_src_path_get();
  let other_direcories = await mykro_config_src_other_get();
  let result = [];
  await list_add(result, mykro_directory);
  await list_add_all(result, other_direcories);
  return result;
}
