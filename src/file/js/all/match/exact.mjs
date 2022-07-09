import {list_single} from "./../../../../list/single.mjs";
import {m_js_equals} from "./../../../../m/js/equals.mjs";
import {list_where} from "./../../../../list/where.mjs";
import {file_js_all} from "./../../all.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
import {m_js_string_identifier_is} from "./../../../../m/js/string/identifier/is.mjs";
export async function file_js_all_match_exact(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  const files = await file_js_all();
  let matches = await list_where(files, f => m_js_equals(f.name, function_name));
  let match = await list_single(matches);
  return match;
}
