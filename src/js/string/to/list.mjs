import {js_arguments_assert} from "./../../arguments/assert.mjs";
import {js_string_is} from "./../is.mjs";
import {js_string_split} from "./../split.mjs";
export async function js_string_to_list(value) {
  await js_arguments_assert(js_string_is)(arguments);
  let result = await js_string_split(value, "");
  return result;
}
