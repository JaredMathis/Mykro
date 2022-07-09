import {file_js_all} from "./../../all.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
import {list_map} from "./../../../../list/map.mjs";
export async function file_js_all_function_names() {
  await m_js_arguments_assert()(arguments);
  let files = await file_js_all();
  let mapped = await list_map(files, file => file.name);
  return mapped;
}
