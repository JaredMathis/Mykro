import {arguments_assert} from "./../../../../arguments/assert.mjs";
import {string_is} from "./../../../../string/is.mjs";
import path from "path";
import {mykro_config_src_path_get} from "./../../../../mykro/config/src/path/get.mjs";
export async function file_js_name_to_path(function_name) {
  await arguments_assert(string_is)(arguments);
  return path.join(await mykro_config_src_path_get(), `${function_name}.mjs`);
}
