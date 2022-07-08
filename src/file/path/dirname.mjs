import {string_is} from "./../../string/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import path from "path";
export async function file_path_dirname(file_path) {
  await js_arguments_assert(string_is)(arguments);
  return path.dirname(file_path);
}
