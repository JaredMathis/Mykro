import {property_get} from "./property_get.mjs";
import {for_each} from "./for_each.mjs";
import {noop} from "./noop.mjs";
import {mykro_config_property_exists_ensure} from "./mykro_config_property_exists_ensure.mjs";
import {equals} from "./equals.mjs";
import {list_index_last} from "./list_index_last.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import {defined_is} from "./defined_is.mjs";
import {list_is} from "./list_is.mjs";
export async function js_property_path_initialize_get(object, path, default_value) {
  await arguments_assert(defined_is, list_is, defined_is)(arguments);
  await js_property_path_initialize(object, path, default_value);
  return await js_property_path_get(object, path);
}
async function js_property_path_initialize(config, path, default_value) {
  let index_last = await list_index_last(path);
  let current = await js_property_path_get_generic(config, path, for_each_lambda);
  async function for_each_lambda(path_part, index, object, current) {
    let value;
    if (equals(index, index_last)) {
      value = default_value;
    } else {
      value = {};
    }
    await mykro_config_property_exists_ensure(object, current, path_part, value);
  }
}
async function js_property_path_get(object, path) {
  let result = await js_property_path_get_generic(object, path, noop);
  return result;
}
async function js_property_path_get_generic(object, path, for_each_lambda) {
  let current = object;
  await for_each(path, async (path_part, index) => {
    await for_each_lambda(path_part, index, object, current);
    current = property_get(current, path_part);
  });
  return current;
}
