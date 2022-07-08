import {arguments_assert} from "./arguments_assert.mjs";
import {string_is} from "./string_is.mjs";
import path from "path";
import {mykro_config_src_path_get} from "./mykro_config_src_path_get.mjs";
export async function file_js_name_to_path(function_name) {
  await arguments_assert(string_is)(arguments);
  return path.join(await mykro_config_src_path_get(), `${function_name}.mjs`);
}
