import {constant_mykrodev} from "./constant_mykrodev.mjs";
import {mykrodev_config_get} from "./mykrodev_config_get.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function mykrodev_config_src_path_get() {
  await arguments_assert()(arguments);
  let config = await mykrodev_config_get();
  let src_path = config.path.src[await constant_mykrodev()];
  return src_path;
}
