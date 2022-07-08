import path from "path";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {string_is} from "./../../string/is.mjs";
export async function file_path_resolve(file_path) {
  await js_arguments_assert(string_is)(arguments);
  return path.resolve(file_path);
}
