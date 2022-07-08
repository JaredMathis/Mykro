import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
import {file_js_import_add} from "./../../import/add.mjs";
import {js_string_identifier_is} from "./../../../../js/string/identifier/is.mjs";
import {file_js_imports_missing_get} from "./get.mjs";
import {js_for_each} from "./../../../../js/for/each.mjs";
export async function file_js_imports_missing_add(function_name) {
  await js_arguments_assert(js_string_identifier_is)(arguments);
  let {imports_missing} = await file_js_imports_missing_get(function_name);
  await js_for_each(imports_missing, async import_missing => {
    await file_js_import_add(function_name, import_missing);
  });
}
