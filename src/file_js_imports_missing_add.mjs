import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_import_add } from "./file_js_import_add.mjs";
export async function file_js_imports_missing_add() {
  await arguments_assert()(arguments);
  let {import_names} = await file_js_imports_missing_get(function_name);
  await file_js_import_add(function_name, import_name);
}
