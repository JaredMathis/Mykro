import {mykro_config_path_src_working_get} from "./../../../mykro/config/path/src/working/get.mjs";
import {file_js_extension} from "./../extension.mjs";
import {file_path_join} from "./../../path/join.mjs";
import {m_js_string_replace_all} from "./../../../m/js/string/replace/all.mjs";
import {m_js_string_identifier_is} from "./../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function file_js_path_get(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  let directory = await mykro_config_path_src_working_get();
  let function_path = await m_js_string_replace_all(function_name, "_", "/");
  function_path = await file_path_join([directory, function_path]);
  function_path += await file_js_extension();
  return function_path;
}
