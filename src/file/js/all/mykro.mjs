import {mykro_config_src_path_get} from "./../../../mykro/config/src/path/get.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {file_js_all_generic} from "./generic.mjs";
export async function file_js_all_mykro() {
  await m_js_arguments_assert()(arguments);
  let mykro_directory = await mykro_config_src_path_get();
  return await file_js_all_generic([mykro_directory]);
}
