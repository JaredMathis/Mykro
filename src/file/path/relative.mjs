import {js_string_is} from "./../../js/string/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import 'path'
export async function file_path_relative(file_path_a, file_path_b) {
  await js_arguments_assert(js_string_is, js_string_is)(arguments);
  return path.relative(file_path_a, file_path_b)
}
