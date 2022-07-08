import {js_not} from "./../../js/not.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {js_assert} from "./../../js/assert.mjs";
import {js_equals} from "./../../js/equals.mjs";
import {js_string_identifier_is} from "./../../js/string/identifier/is.mjs";
import {file_js_all_identifier_rename} from "./all/identifier/rename.mjs";
import {file_js_move} from "./move.mjs";
export async function file_js_rename(function_name, function_name_new) {
  await js_arguments_assert(js_string_identifier_is, js_string_identifier_is)(arguments);
  await js_assert(js_not(js_equals))(function_name, function_name_new);
  await file_js_all_identifier_rename(function_name, function_name_new);
  await file_js_move(function_name, function_name_new);
}
