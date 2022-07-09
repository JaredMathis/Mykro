import {js_property_path_initialize_get} from "./../../../../js/property/path/initialize/get.mjs";
import {constant_mykro} from "./../../../../constant/mykro.mjs";
import {mykro_config_get} from "./../../get.mjs";
import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
import path from "path";
export async function mykro_config_src_path_get() {
  await js_arguments_assert()(arguments);
  let config = await mykro_config_get();
  let src_path = config.path.src[await constant_mykro()];
  if (false) {
    let src_path = await js_property_path_initialize_get(config, ["path", "src", await constant_mykro()], `./node_modules/${await constant_mykro()}/src`);
  }
  return path.normalize(src_path);
}
