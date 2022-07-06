import {arguments_assert} from "./arguments_assert.mjs";
import { mykrodev_config_src_path_get } from "./mykrodev_config_src_path_get.mjs";
import { string_identifier_is } from "./string_identifier_is.mjs";
import { string_is } from "./string_is.mjs";
export async function file_js_move(function_name, file_path_new) {
  await arguments_assert(string_identifier_is, string_is)(arguments);

  let directory = await mykrodev_config_src_path_get();

  return directory;
}
