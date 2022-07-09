import {mykro_config_src_path_get} from "./../path/get.mjs";
import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
export async function mykro_config_src_paths_get() {
  await js_arguments_assert()(arguments);
  let mykro_directory = await mykro_config_src_path_get();
}
