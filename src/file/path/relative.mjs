import {js_string_is} from "./../../js/string/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function file_path_relative(file_path_a, file_path_b) {
  await js_arguments_assert(js_string_is, string_is)(arguments);
}
