import {defined_is} from './defined_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
import { json_to } from './json_to.mjs';
import { file_overwrite } from './file_overwrite.mjs';
import { mykrodev_config_path } from './mykrodev_config_path.mjs';
export async function mykrodev_config_save(config) {
  await arguments_assert(defined_is)(arguments);
  let file_path = await mykrodev_config_path();
  let json = await json_to(config)
  await file_overwrite(file_path, json);
}
