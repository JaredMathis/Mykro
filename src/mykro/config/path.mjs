import {arguments_assert} from "./../../arguments/assert.mjs";
import {constant_mykro} from "./../../constant/mykro.mjs";
export async function mykro_config_path() {
  await arguments_assert()(arguments);
  return `./${await constant_mykro()}_config.json`;
}
