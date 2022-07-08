import {file_js_imports_missing_add} from './file_js_imports_missing_add.mjs';
import {string_identifier_is} from "./../../string/identifier/is.mjs";
import {arguments_assert} from "./../../arguments/assert.mjs";
import { file_js_imports_fix } from "./imports/fix.mjs";
export async function file_js_auto(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  await file_js_imports_missing_add(function_name);
  await file_js_imports_fix(function_name);
}
