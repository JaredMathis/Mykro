import {file_move} from './file_move.mjs';
import {file_path_join} from "./file_path_join.mjs";
import {file_path_join, path_combine} from "./file_path_join.mjs";
import {list_single} from "./list_single.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import {equals} from "./equals.mjs";
import {file_js_all} from "./file_js_all.mjs";
import {list_where} from "./list_where.mjs";
import {mykro_config_src_path_get} from "./mykro_config_src_path_get.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
import {string_is} from "./string_is.mjs";
export async function file_js_move(function_name, file_path_new) {
  await arguments_assert(string_identifier_is, string_is)(arguments);
  let directory = await mykro_config_src_path_get();
  file_path_new = await file_path_join(directory, file_path_new);
  const files = await file_js_all();
  let matches = await list_where(files, f => equals(f.name, function_name));
  let match = await list_single(matches);
  if (false) {
    await file_move(match.file_path, file_path_new);
  }
  return match;
}
