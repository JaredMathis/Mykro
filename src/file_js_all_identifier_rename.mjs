import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_all_identifiers_get } from "./file_js_all_identifiers_get.mjs";
export async function file_js_all_identifier_rename(name_from, name_to) {
  await arguments_assert(string_is, string_is)(arguments);
  let identifiers = await file_js_all_identifiers_get()
}
