import {js_string_join} from "./../join.mjs";
import {js_string_is} from "./../is.mjs";
import {js_arguments_assert} from "./../../arguments/assert.mjs";
import {js_string_split} from "./../split.mjs";
export async function js_string_replace_all(input, search, replacement) {
  await js_arguments_assert(js_string_is, js_string_is, js_string_is)(arguments);
  let split = await js_string_split(input, search);
  return await js_string_join(split, replacement);
}
