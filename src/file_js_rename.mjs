import {defined_is} from "./defined_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import { string_identifier_is } from "./string_identifier_is.mjs";
export async function file_js_rename(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
}
