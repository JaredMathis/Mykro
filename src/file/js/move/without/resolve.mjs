import {file_move} from "./../../../move.mjs";
import {file_js_path_get} from "./../../path/get.mjs";
import {file_js_all_match_exact} from "./../../all/match/exact.mjs";
import {m_js_string_is} from "./../../../../m/js/string/is.mjs";
import {m_js_string_identifier_is} from "./../../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
export async function file_js_move_without_resolve(function_name, function_name_new) {
  await m_js_arguments_assert(m_js_string_identifier_is, m_js_string_is)(arguments);
  let match = await file_js_all_match_exact(function_name);
  let function_new_path = await file_js_path_get(function_name_new);
  await file_move(match.file_path, function_new_path);
}
