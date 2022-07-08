import {string_join} from "./../join.mjs";
import {string_is} from "./../is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {string_split} from "./../split.mjs";
export async function string_replace_all(input, search, replacement) {
  await js_arguments_assert(string_is, string_is, string_is)(arguments);
  let split = await string_split(input, search);
  return await string_join(split, replacement);
}
