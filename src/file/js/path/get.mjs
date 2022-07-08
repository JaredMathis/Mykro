import {file_js_extension} from "./../extension.mjs";
import {file_path_join} from "./../../path/join.mjs";
import {string_replace_all} from "./../../../string/replace/all.mjs";
import {mykro_config_src_path_get} from "./../../../mykro/config/src/path/get.mjs";
import {string_identifier_is} from "./../../../string/identifier/is.mjs";
import {arguments_assert} from "./../../../arguments/assert.mjs";
export async function file_js_path_get(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let directory = await mykro_config_src_path_get();
  let function_path = await string_replace_all(function_name, "_", "/");
  function_path = await file_path_join([directory, function_path]);
  function_path += await file_js_extension();
  return function_path;
}