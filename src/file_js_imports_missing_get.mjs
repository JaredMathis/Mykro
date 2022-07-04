import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_imports_get } from "./file_js_imports_get.mjs";
import { string_identifier_is } from "./string_identifier_is.mjs";
export async function file_js_imports_missing_get(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let imports = await file_js_imports_get(function_name)
  let identifiers = await file_js_identifiers_get(function_name);
  
}
