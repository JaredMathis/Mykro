import {mykro_config_property_exists_ensure} from './mykro_config_property_exists_ensure.mjs';
import {mykro_config_get} from "./mykro_config_get.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function mykro_config_branch_main_get() {
  await arguments_assert()(arguments);
  let config = await mykro_config_get();
  let path = ['branch', 'main'];
  await mykro_config_property_exists_ensure(config, config, "branch", {});
  await mykro_config_property_exists_ensure(config, config.branch, "main", "main");
  return config.branch.main;
}
