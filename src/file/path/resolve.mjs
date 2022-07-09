import path from "path";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {m_js_string_is} from "./../../m/js/string/is.mjs";
export async function file_path_resolve(file_path) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  return path.resolve(file_path);
}
