import {arguments_assert} from "./arguments_assert.mjs";
import {constant_mykro} from "./constant_mykro.mjs";
export async function mykrodev_config_path() {
  await arguments_assert()(arguments);
  return `./${await constant_mykro()}_config.json`;
}
