import {string_identifier_is} from './string_identifier_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
export async function file_js_auto(file_name) {
  await arguments_assert(string_identifier_is)(arguments);
}
