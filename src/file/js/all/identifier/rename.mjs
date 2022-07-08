import {es_traverse} from "./../../../../es/traverse.mjs";
import {not} from "./../../../../not.mjs";
import {string_is} from "./../../../../string/is.mjs";
import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
import {file_js_all_identifiers_get} from "./../identifiers/get.mjs";
import {assert} from "./../../../../assert.mjs";
import {list_contains} from "./../../../../list/contains.mjs";
import {file_js_transform} from "./../../transform.mjs";
import {string_identifier_is} from "./../../../../string/identifier/is.mjs";
import {equals} from "./../../../../equals.mjs";
import {file_js_all_for_each} from "./../for/each.mjs";
import {file_js_identifier_rename} from "./../../identifier/rename.mjs";
export async function file_js_all_identifier_rename(name_from, name_to) {
  await js_arguments_assert(string_is, string_is)(arguments);
  let identifiers = await file_js_all_identifiers_get();
  await assert(not(list_contains))(identifiers, name_to);
  await file_js_all_for_each(file_js_identifier_rename.name, name_from, name_to);
}
