import {string_identifier_is} from "./string_identifier_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_move } from "./file_js_move.mjs";
import { file_js_imports_fix } from "./file_js_imports_fix.mjs";
import { file_js_all } from "./file_js_all.mjs";
import { for_each } from "./for_each.mjs";
export async function file_js_folderize(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  await file_js_move(function_name, function_name)
  let files = await file_js_all();
  await for_each(files, async file => {
    await file_js_imports_fix(file.name);
  })
}
