import {js_property_path_initialize_get} from './js_property_path_initialize_get.mjs';
import {list_index_last} from './list_index_last.mjs';
import {mykro_config_property_exists_ensure} from './mykro_config_property_exists_ensure.mjs';
import {mykro_config_get} from "./mykro_config_get.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import { for_each } from './for_each.mjs';
import { equals } from './equals.mjs';
import { property_get } from './property_get.mjs';
import { noop } from './noop.mjs';
export async function mykro_config_branch_main_get() {
  await arguments_assert()(arguments);
  let config = await mykro_config_get();
  return await js_property_path_initialize_get(config, ['branch', 'main'], "main");
}