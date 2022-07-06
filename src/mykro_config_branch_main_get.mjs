import {mykro_config_save} from "./mykro_config_save.mjs";
import {mykro_config_get} from "./mykro_config_get.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import {js_property_has} from "./js_property_has.mjs";
export async function mykro_config_branch_main_get() {
  await arguments_assert()(arguments);
  let config = await mykro_config_get();
  await mykro_config_property_exists_ensure(config, config, "branch", {});
  await mykro_config_property_exists_ensure(config, config.branch, "main", "main");
  return config.branch.main;
}
async function mykro_config_property_exists_ensure(config, object, property_name, default_value) {
  if (!await js_property_has(object, property_name)) {
    object[property_name] = default_value;
    await mykro_config_save(config);
  }
}
