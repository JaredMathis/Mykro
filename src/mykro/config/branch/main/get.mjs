import {js_property_path_initialize_get} from "./../../../../js/property/path/initialize/get.mjs";
import {mykro_config_get} from "./../../get.mjs";
import {arguments_assert} from "./../../../../arguments/assert.mjs";
export async function mykro_config_branch_main_get() {
  await arguments_assert()(arguments);
  let config = await mykro_config_get();
  return await js_property_path_initialize_get(config, ["branch", "main"], "main");
}