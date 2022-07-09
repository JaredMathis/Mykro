import {file_json_save} from "./../../file/json/save.mjs";
import {m_js_defined_is} from "./../../m/js/defined/is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {json_to} from "./../../json/to.mjs";
import {file_overwrite} from "./../../file/overwrite.mjs";
import {mykro_config_path} from "./path.mjs";
export async function mykro_config_save(config) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  let file_path = await mykro_config_path();
  await file_json_save(config, file_path);
}
