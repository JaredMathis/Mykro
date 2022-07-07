import {arguments_assert} from "./arguments_assert.mjs";
import {string_is} from "./string_is.mjs";
import {file_js_all_match_exact} from "./file_js_all_match_exact.mjs";
export async function file_js_name_to_path(function_name) {
  await arguments_assert(string_is)(arguments);
  let match = await file_js_all_match_exact(function_name);
  return match.file_path;
}
