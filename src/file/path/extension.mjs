import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import path from "path";
import {m_js_string_is} from "./../../m/js/string/is.mjs";
export async function file_path_extension(file_path) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  var ext = path.parse(file_path).ext;
  return ext;
}
