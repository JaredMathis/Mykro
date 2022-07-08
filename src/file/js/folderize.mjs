import {string_identifier_is} from "./../../string/identifier/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {file_js_move} from "./move.mjs";
export async function file_js_folderize(function_name) {
  await js_arguments_assert(string_identifier_is)(arguments);
  await file_js_move(function_name, function_name);
}
