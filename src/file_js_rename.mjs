import {not} from "./not.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import {assert} from "./assert.mjs";
import {equals} from "./equals.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
import {file_js_all_identifier_rename} from "./file_js_all_identifier_rename.mjs";
import {file_js_move} from "./file_js_move.mjs";
export async function file_js_rename(function_name, function_name_new) {
  await arguments_assert(string_identifier_is, string_identifier_is)(arguments);
  await assert(not(equals))(function_name, function_name_new);
  await file_js_all_identifier_rename(function_name, function_name_new);
  await file_js_move(function_name, function_name_new);
}
