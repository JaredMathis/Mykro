import {arguments_assert} from "./arguments_assert.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
export async function file_js_argument_remove(file_name) {
  await arguments_assert(string_identifier_is)(arguments);
}
