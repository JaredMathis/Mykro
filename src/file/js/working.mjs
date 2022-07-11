import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function file_js_working() {
  await m_js_arguments_assert()(arguments);
  let path_working = await mykro_config_path_src_working_get();
  let files = await file_js_all();
  let filtered = await await list_where(files, async (file) => await m_js_string_starts_with(file.file_path, path_working));
  let function_names = await list_map(filtered, file => file.name);
  return function_names;
}
