import {arguments_assert} from "./arguments_assert.mjs";
import {file_js_import_add} from "./file_js_import_add.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
import {file_js_imports_missing_get} from "./file_js_imports_missing_get.mjs";
export async function file_js_imports_missing_add(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let {imports_missing} = await file_js_imports_missing_get(function_name);
  await for_each(imports_missing, async import_missing => {
    await file_js_import_add(function_name, import_missing);
  });
}
