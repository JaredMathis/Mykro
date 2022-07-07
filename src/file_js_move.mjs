import {file_js_all_match_exact} from './file_js_all_match_exact.mjs';
import {string_replace_all} from './string_replace_all.mjs';
import {file_move} from './file_move.mjs';
import {file_path_join} from "./file_path_join.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import {mykro_config_src_path_get} from "./mykro_config_src_path_get.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
import {string_is} from "./string_is.mjs";
import { file_js_extension } from './file_js_extension.mjs';
export async function file_js_move(function_name, function_name_new) {
  await arguments_assert(string_identifier_is, string_is)(arguments);
  let directory = await mykro_config_src_path_get();
  let function_new_path = await string_replace_all(function_name_new, '_', '/');
  function_new_path = await file_path_join([directory, function_new_path]);
  function_new_path += await file_js_extension();
  let match = await file_js_all_match_exact(function_name);
  await file_move(match.file_path, function_new_path);
  return {function_new_path,match};
}

