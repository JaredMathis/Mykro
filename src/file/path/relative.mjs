import {m_js_string_is} from "./../../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import path from "path";
export async function file_path_relative(file_path_a, file_path_b) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  return path.relative(file_path_a, file_path_b);
}
