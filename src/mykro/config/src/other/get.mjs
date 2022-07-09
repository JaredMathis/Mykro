import { js_property_path_initialize_get } from "../../../../js/property/path/initialize/get.mjs";
import { mykro_config_get } from "../../get.mjs";
import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
export async function mykro_config_src_other_get() {
  await js_arguments_assert()(arguments);
  let config = await mykro_config_get();
  let result = await js_property_path_initialize_get(config, ["path", "src", "other"], []);
  return result
}
