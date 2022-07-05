import {defined_is} from './defined_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
export async function mykrodev_config_save(config) {
  await arguments_assert(defined_is)(arguments);
}
