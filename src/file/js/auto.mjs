import {file_js_imports_missing_add} from "./imports/missing/add.mjs";
import {js_string_identifier_is} from "./../../js/string/identifier/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {file_js_imports_resolve} from "./imports/resolve.mjs";
export async function file_js_auto(function_name) {
  await js_arguments_assert(js_string_identifier_is)(arguments);
  await file_js_imports_missing_add(function_name);
  await file_js_imports_resolve(function_name);
}
