import {file_js_extension} from "./../extension.mjs";
import {file_path_join} from "./../../path/join.mjs";
import {js_string_replace_all} from "./../../../js/string/replace/all.mjs";
import {mykro_config_src_path_get} from "./../../../mykro/config/src/path/get.mjs";
import {js_string_identifier_is} from "./../../../js/string/identifier/is.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
export async function file_js_path_get(function_name) {
  await js_arguments_assert(js_string_identifier_is)(arguments);
  let directory = await mykro_config_src_path_get();
  let function_path = await js_string_replace_all(function_name, "_", "/");
  function_path = await file_path_join([directory, function_path]);
  function_path += await file_js_extension();
  return function_path;
}
