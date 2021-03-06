import {m_js_string_search_matches} from "./../../m/js/string/search/matches.mjs";
import {list_where} from "./../../list/where.mjs";
import {file_js_all} from "./all.mjs";
import {m_js_function_is} from "./../../m/js/function/is.mjs";
import {m_js_equals} from "./../../m/js/equals.mjs";
import {list_size} from "./../../list/size.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {list_is} from "./../../list/is.mjs";
import {m_js_string_identifier_is} from "./../../m/js/string/identifier/is.mjs";
import {file_path_resolve} from "./../path/resolve.mjs";
export async function file_js_run(function_name, _arguments, on_no_matches, on_success, on_error, on_multiple_matches, on_match) {
  await m_js_arguments_assert(m_js_string_identifier_is, list_is, m_js_function_is, m_js_function_is, m_js_function_is, m_js_function_is, m_js_function_is)(arguments);
  let matches = await run_line_search(function_name);
  let matches_count = await list_size(matches);
  if (m_js_equals(matches_count, 0)) {
    await on_no_matches();
  } else if (m_js_equals(matches_count, 1)) {
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
  let filtered = await file_js_all();
  let exact_matches = await list_where(filtered, m => m_js_equals(m.name, first));
  if (m_js_equals(await list_size(exact_matches), 1)) {
    return exact_matches;
  }
  let matches = await list_where(filtered, async m => {
    return await m_js_string_search_matches(m.name, first);
  });
  return matches;
}
