import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_string_is} from "./../js/string/is.mjs";
import {file_overwrite} from "./overwrite.mjs";
export async function file_new(file_path) {
  await js_arguments_assert(js_string_is)(arguments);
  await file_overwrite(file_path, "");
}
