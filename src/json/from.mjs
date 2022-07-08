import {string_is} from "./../string/is.mjs";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
export async function json_from(unparsed) {
  await js_arguments_assert(string_is)(arguments);
  return JSON.parse(unparsed);
}
