import {list_single} from "./../../../../list/single.mjs";
import {js_equals} from "./../../../../js/equals.mjs";
import {list_where} from "./../../../../list/where.mjs";
import {file_js_all} from "./../../all.mjs";
import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
import {string_identifier_is} from "./../../../../string/identifier/is.mjs";
export async function file_js_all_match_exact(function_name) {
  await js_arguments_assert(string_identifier_is)(arguments);
  const files = await file_js_all();
  let matches = await list_where(files, f => js_equals(f.name, function_name));
  let match = await list_single(matches);
  return match;
}
