import {arguments_assert} from "./arguments_assert.mjs";
import {constant_mykrodev} from "./constant_mykrodev.mjs";
export async function mykrodev_config_path() {
  await arguments_assert()(arguments);
  return `./${await constant_mykrodev()}_config.json`;
}
