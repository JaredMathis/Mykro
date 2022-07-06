import {file_json_save} from "./file_json_save.mjs";
import {defined_is} from "./defined_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import {json_to} from "./json_to.mjs";
import {file_overwrite} from "./file_overwrite.mjs";
import {mykro_config_path} from "./mykro_config_path.mjs";
export async function mykro_config_save(config) {
  await arguments_assert(defined_is)(arguments);
  let file_path = await mykro_config_path();
  await file_json_save(config, file_path);
}
