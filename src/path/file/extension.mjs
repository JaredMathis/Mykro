import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import path from "path";
import {js_string_is} from "./../../js/string/is.mjs";
export async function path_file_extension(file_path) {
  await js_arguments_assert(js_string_is)(arguments);
  var ext = path.parse(file_path).ext;
  return ext;
}
