import {m_js_not} from "./../../../../m/js/not.mjs";
import {m_js_string_is} from "./../../../../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
import {file_js_all_identifiers_get} from "./../identifiers/get.mjs";
import {m_js_assert} from "./../../../../m/js/assert.mjs";
import {list_contains} from "./../../../../list/contains.mjs";
import {file_js_all_for_each} from "./../for/each.mjs";
import {file_js_identifier_rename} from "./../../identifier/rename.mjs";
export async function file_js_all_identifier_rename(name_from, name_to) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  let identifiers = await file_js_all_identifiers_get();
  await m_js_assert(m_js_not(list_contains))(identifiers, name_to);
  await file_js_all_for_each(file_js_identifier_rename.name, name_from, name_to);
}
