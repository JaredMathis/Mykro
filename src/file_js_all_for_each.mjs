import {file_js_all} from './file_js_all.mjs';
import {string_identifier_is} from './string_identifier_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
export async function file_js_all_for_each(function_name) {
  await arguments_assert(string_identifier_is)(arguments);

  let files = await file_js_all();

  return files;
}
