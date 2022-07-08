import {string_identifier_is} from "./../../string_identifier_is.mjs";
import {arguments_assert} from "./../../arguments/assert.mjs";
import {file_js_move} from "./../../file_js_move.mjs";
import {file_js_imports_fix} from "./../../file_js_imports_fix.mjs";
export async function file_js_folderize(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  await file_js_move(function_name, function_name);
  await file_js_imports_fix(function_name);
}
