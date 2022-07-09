import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {constant_mykro} from "./../../constant/mykro.mjs";
export async function mykro_config_path() {
  await m_js_arguments_assert()(arguments);
  return `./${await constant_mykro()}_config.json`;
}
