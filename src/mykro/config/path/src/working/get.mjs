import {file_path_normalize} from "./../../../../../file/path/normalize.mjs";
import {m_js_property_path_initialize_get} from "./../../../../../m/js/property/path/initialize/get.mjs";
import {mykro_config_get} from "./../../../get.mjs";
import {m_js_arguments_assert} from "./../../../../../m/js/arguments/assert.mjs";
export async function mykro_config_path_src_working_get() {
  await m_js_arguments_assert()(arguments);
  let config = await mykro_config_get();
  let src_path = await m_js_property_path_initialize_get(config, ["path", "src", "working"], `./src`);
  return await file_path_normalize(src_path);
}
