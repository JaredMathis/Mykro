import {arguments_assert} from "./arguments_assert.mjs";
import {file_js_import_add} from "./file_js_import_add.mjs";
export async function file_js_imports_missing_add(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let {import_names} = await file_js_imports_missing_get(function_name);
  await for_each(import_names, async import_name => {
    await file_js_import_add(function_name, import_name);
  });
}
