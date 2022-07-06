import {list_index_last} from './list_index_last.mjs';
import {mykro_config_property_exists_ensure} from './mykro_config_property_exists_ensure.mjs';
import {mykro_config_get} from "./mykro_config_get.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import { for_each } from './for_each.mjs';
export async function mykro_config_branch_main_get() {
  await arguments_assert()(arguments);
  let config = await mykro_config_get();
  let path = ['branch', 'main'];
  let default_value = "main";
  let index_last = await list_index_last(path);
  await for_each(path, async (path_part, index) => {
    
  })
  await mykro_config_property_exists_ensure(config, config, "branch", {});
  await mykro_config_property_exists_ensure(config, config.branch, "main", default_value);
  return config.branch.main;
}
