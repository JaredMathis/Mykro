import {es_traverse} from "./../../../../es/traverse.mjs";
import {js_not} from "./../../../../js/not.mjs";
import {js_string_is} from "./../../../../js/string/is.mjs";
import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
import {file_js_all_identifiers_get} from "./../identifiers/get.mjs";
import {js_assert} from "./../../../../js/assert.mjs";
import {list_contains} from "./../../../../list/contains.mjs";
import {file_js_transform} from "./../../transform.mjs";
import {js_string_identifier_is} from "./../../../../js/string/identifier/is.mjs";
import {js_equals} from "./../../../../js/equals.mjs";
import {file_js_all_for_each} from "./../for/each.mjs";
import {file_js_identifier_rename} from "./../../identifier/rename.mjs";
export async function file_js_all_identifier_rename(name_from, name_to) {
  await js_arguments_assert(js_string_is, js_string_is)(arguments);
  let identifiers = await file_js_all_identifiers_get();
  await js_assert(js_not(list_contains))(identifiers, name_to);
  await file_js_all_for_each(file_js_identifier_rename.name, name_from, name_to);
}
