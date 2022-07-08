import {file_json_save} from "./../../file/json/save.mjs";
import {js_defined_is} from "./../../js/defined/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {json_to} from "./../../json/to.mjs";
import {file_overwrite} from "./../../file/overwrite.mjs";
import {mykro_config_path} from "./path.mjs";
export async function mykro_config_save(config) {
  await js_arguments_assert(js_defined_is)(arguments);
  let file_path = await mykro_config_path();
  await file_json_save(config, file_path);
}
