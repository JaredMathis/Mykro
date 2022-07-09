import {list_join} from "./../../../../list/join.mjs";
import {mykro_config_src_other_get} from "./../other/get.mjs";
import {mykro_config_src_path_get} from "./../path/get.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
export async function mykro_config_src_paths_get() {
  await m_js_arguments_assert()(arguments);
  let mykro_directory = await mykro_config_src_path_get();
  let other_direcories = await mykro_config_src_other_get();
  let result = await list_join([[mykro_directory], other_direcories]);
  return result;
}
