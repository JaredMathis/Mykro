import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import path from "path";
import {list_is} from "./../../list/is.mjs";
export async function file_path_join(paths) {
  await m_js_arguments_assert(list_is)(arguments);
  return path.join(...paths);
}
