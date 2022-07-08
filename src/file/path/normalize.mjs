import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {js_string_is} from "./../../js/string/is.mjs";
import path from "path";
export async function file_path_normalize(file_path) {
  await js_arguments_assert(js_string_is)(arguments);
  return path.normalize(file_path);
}
