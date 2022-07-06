import {constant_mykro} from "./constant_mykro.mjs";
import {mykro_config_get} from "./mykro_config_get.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function mykro_config_src_path_get() {
  await arguments_assert()(arguments);
  let config = await mykro_config_get();
  let src_path = config.path.src[await constant_mykro()];
  return src_path;
}
