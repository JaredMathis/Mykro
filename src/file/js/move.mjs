import {file_js_all_match_exact} from "./all/match/exact.mjs";
import {string_replace_all} from "./../../string/replace/all.mjs";
import {file_move} from "./../move.mjs";
import {file_path_join} from "./../path/join.mjs";
import {arguments_assert} from "./../../arguments/assert.mjs";
import {mykro_config_src_path_get} from "./../../mykro/config/src/path/get.mjs";
import {string_identifier_is} from "./../../string/identifier/is.mjs";
import {string_is} from "./../../string/is.mjs";
import {file_js_extension} from "./extension.mjs";
export async function file_js_move(function_name, function_name_new) {
  await arguments_assert(string_identifier_is, string_is)(arguments);
  let directory = await mykro_config_src_path_get();
  let function_new_path = await string_replace_all(function_name_new, "_", "/");
  function_new_path = await file_path_join([directory, function_new_path]);
  function_new_path += await file_js_extension();
  let match = await file_js_all_match_exact(function_name);
  await file_move(match.file_path, function_new_path);
  return {
    function_new_path,
    match
  };
}
