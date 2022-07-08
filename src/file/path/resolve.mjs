import path from "path";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {js_string_is} from "./../../js/string/is.mjs";
export async function file_path_resolve(file_path) {
  await js_arguments_assert(js_string_is)(arguments);
  return path.resolve(file_path);
}
