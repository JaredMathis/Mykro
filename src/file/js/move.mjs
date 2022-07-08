import {file_js_imports_fix} from "./imports/fix.mjs";
import {for_each} from "./../../for/each.mjs";
import {file_js_all} from "./all.mjs";
import {file_js_all_match_exact} from "./all/match/exact.mjs";
import {file_move} from "./../move.mjs";
import {arguments_assert} from "./../../arguments/assert.mjs";
import {string_identifier_is} from "./../../string/identifier/is.mjs";
import {string_is} from "./../../string/is.mjs";
import { file_js_path_get } from "./path/get.mjs";
export async function file_js_move(function_name, function_name_new) {
  await arguments_assert(string_identifier_is, string_is)(arguments);
  let match = await file_js_all_match_exact(function_name);
  let function_new_path = await file_js_path_get(function_name_new);
  await file_move(match.file_path, function_new_path);
  let files = await file_js_all();
  await for_each(files, async file => {
    await file_js_imports_fix(file.name);
  });
  return {
    function_new_path,
    match
  };
}
