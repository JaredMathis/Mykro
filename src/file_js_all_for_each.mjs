import {file_js_run} from './file_js_run.mjs';
import {file_js_all} from './file_js_all.mjs';
import {string_identifier_is} from './string_identifier_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
import { for_each } from './for_each.mjs';
export async function file_js_all_for_each(function_name) {
  await arguments_assert(string_identifier_is)(arguments);

  await file_js_run(function_name, [], error, error, error, error);

  let files = await file_js_all();
  await for_each(files, async file => {

  });

  return files;
}
