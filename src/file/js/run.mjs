import {js_string_search_matches} from "./../../js/string/search/matches.mjs";
import {list_where} from "./../../list/where.mjs";
import {file_js_all} from "./all.mjs";
import {js_function_is} from "./../../js/function/is.mjs";
import {js_equals} from "./../../js/equals.mjs";
import {list_size} from "./../../list/size.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {list_is} from "./../../list/is.mjs";
import {js_string_identifier_is} from "./../../js/string/identifier/is.mjs";
import {file_path_resolve} from "./../path/resolve.mjs";
export async function file_js_run(function_name, _arguments, on_no_matches, on_success, on_error, on_multiple_matches, on_match) {
  await js_arguments_assert(js_string_identifier_is, list_is, js_function_is, js_function_is, js_function_is, js_function_is, js_function_is)(arguments);
  let matches = await run_line_search(function_name);
  let matches_count = await list_size(matches);
  if (js_equals(matches_count, 0)) {
    await on_no_matches();
  } else if (js_equals(matches_count, 1)) {
    let match = matches[0];
    let import_path = await file_path_resolve(match.file_path);
    await on_match(import_path, match);
    let imported = await import("file://" + import_path);
    let _function = imported[match.name];
    try {
      let result = await _function(..._arguments);
      await on_success(result, match);
    } catch (e) {
      await on_error(e);
    }
  } else {
    await on_multiple_matches(matches);
  }
}
async function run_line_search(first) {
  if (false) {
    file_js_all_function_name;
  }
  let function_names = await file_js_all();
  let exact_matches = await list_where(function_names, m => js_equals(m.name, first));
  if (js_equals(await list_size(exact_matches), 1)) {
    return exact_matches;
  }
  let matches = await list_where(function_names, async m => {
    return await js_string_search_matches(m.name, first);
  });
  return matches;
}
