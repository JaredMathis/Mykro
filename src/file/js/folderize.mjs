import {string_identifier_is} from "./../../string/identifier/is.mjs";
import {arguments_assert} from "./../../arguments/assert.mjs";
import {file_js_move} from "./move.mjs";
import {file_js_imports_fix} from "./imports/fix.mjs";
import {file_js_all} from "./all.mjs";
import {for_each} from "./../../for/each.mjs";
export async function file_js_folderize(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  await file_js_move(function_name, function_name);
}
