import {not} from "./../../not.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {js_assert} from "./../../js/assert.mjs";
import {equals} from "./../../equals.mjs";
import {string_identifier_is} from "./../../string/identifier/is.mjs";
import {file_js_all_identifier_rename} from "./all/identifier/rename.mjs";
import {file_js_move} from "./move.mjs";
export async function file_js_rename(function_name, function_name_new) {
  await js_arguments_assert(string_identifier_is, string_identifier_is)(arguments);
  await js_assert(not(equals))(function_name, function_name_new);
  await file_js_all_identifier_rename(function_name, function_name_new);
  await file_js_move(function_name, function_name_new);
}
