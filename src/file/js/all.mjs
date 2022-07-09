import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {mykro_config_src_paths_get} from "./../../mykro/config/src/paths/get.mjs";
import {file_js_all_generic} from "./all/generic.mjs";
export async function file_js_all() {
  await m_js_arguments_assert()(arguments);
  let directories = await mykro_config_src_paths_get();
  return await file_js_all_generic(directories);
}
