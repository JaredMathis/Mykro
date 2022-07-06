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
async function js_property_path_initialize_get(config, path, default_value) {
  await js_property_path_initialize(config, path, default_value);
  return await js_property_path_get(config, path);
}

async function js_property_path_initialize(config, path, default_value) {
  let index_last = await list_index_last(path);
  let current = await js_property_path_get_generic(config, path, for_each_lambda);
  async function for_each_lambda(path_part, index) {
    let value;
    if (equals(index, index_last)) {
      value = default_value;
    } else {
      value = {};
    }
    await mykro_config_property_exists_ensure(config, current, path_part, value);
  }
}

async function js_property_path_get(object, path) {
  let result = await js_property_path_get_generic(object, path, noop);
  return result;
}

async function js_property_path_get_generic(object, path, for_each_lambda) {
  let current = object;
  await for_each(path, async (path_part, index) => {
    await for_each_lambda(path_part, index);
    current = property_get(current, path_part);
  });
  return current;
}

