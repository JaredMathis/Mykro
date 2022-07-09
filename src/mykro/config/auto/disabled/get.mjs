import {mykro_config_get} from "./../../get.mjs";
import {m_js_property_path_initialize_get} from "./../../../../m/js/property/path/initialize/get.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
export async function mykro_config_auto_disabled_get() {
  await m_js_arguments_assert()(arguments);
  let config = await mykro_config_get();
  return await m_js_property_path_initialize_get(config, ["auto", "disabled"], false);
}
