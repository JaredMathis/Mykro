import {arguments_assert} from "./arguments_assert.mjs";
import {file_list} from "./file_list.mjs";
import {path_file_name} from "./path_file_name.mjs";
import {path_file_extension} from "./path_file_extension.mjs";
import {list_map} from "./list_map.mjs";
import {list_where} from "./list_where.mjs";
export async function file_js_all() {
  await arguments_assert()(arguments);
  let directory = "./src";
  //await mykrodev_config_get();
  let files = Array.from(file_list(directory));
  let mapped = await list_map(files, async f => {
    return {
      name: path_file_name(f),
      file_path: f,
      extension: await path_file_extension(f)
    };
  });
  let filtered = await list_where(mapped, m => m.extension === ".mjs");
  return filtered;
}
