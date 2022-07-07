import {string_identifier_is} from './string_identifier_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_all_match_exact } from './file_js_all_match_exact.mjs';
export async function file_js_imports_fix(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let match = await file_js_all_match_exact(function_name);
}
