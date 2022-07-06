import {list_single} from './list_single.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
import { equals } from "./equals.mjs";
import { file_js_all } from "./file_js_all.mjs";
import { list_where } from "./list_where.mjs";
import { mykrodev_config_src_path_get } from "./mykrodev_config_src_path_get.mjs";
import { string_identifier_is } from "./string_identifier_is.mjs";
import { string_is } from "./string_is.mjs";
export async function file_js_move(function_name, file_path_new) {
  await arguments_assert(string_identifier_is, string_is)(arguments);

  let directory = await mykrodev_config_src_path_get();
  
  let matches = await list_where(await file_js_all(), f => equals(f.name, function_name));
  let match = await list_single(matches);

  return matches;
}
