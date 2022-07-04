import {arguments_assert} from "./arguments_assert.mjs";
import { equals } from "./equals.mjs";
import { file_js_all } from "./file_js_all.mjs";
import { file_js_imports_get } from "./file_js_imports_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_where } from "./list_where.mjs";
import { string_identifier_is } from "./string_identifier_is.mjs";
import { list_contains } from "./list_contains.mjs";
import { file_js_identifiers_get } from "./file_js_identifiers_get.mjs";
export async function file_js_imports_missing_get(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let imports = await file_js_imports_get(function_name)
  let identifiers = await file_js_identifiers_get(function_name);
  let functions = await file_js_all();
  let function_names = await list_map(functions, f => f.name);

  let identifiers_for_functions = await list_where(
    identifiers, 
    async i => await list_contains(function_names, i));
  return identifiers;
}
