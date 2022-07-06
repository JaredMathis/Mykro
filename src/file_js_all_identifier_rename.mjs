import {es_traverse} from "./es_traverse.mjs";
import {not} from "./not.mjs";
import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import {file_js_all_identifiers_get} from "./file_js_all_identifiers_get.mjs";
import {assert} from "./assert.mjs";
import {list_contains} from "./list_contains.mjs";
import {file_js_transform} from "./file_js_transform.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
import {equals} from "./equals.mjs";
import { file_js_all_for_each } from "./file_js_all_for_each.mjs";
import { file_js_identifier_rename } from "./file_js_identifier_rename.mjs";
export async function file_js_all_identifier_rename(name_from, name_to) {
  await arguments_assert(string_identifier_is, string_is, string_is)(arguments);
  let identifiers = await file_js_all_identifiers_get();
  await assert(not(list_contains))(identifiers, name_to);
  await file_js_all_for_each(file_js_identifier_rename.name, name_from, name_to)
}
