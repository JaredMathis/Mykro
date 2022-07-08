import {string_is} from "./is.mjs";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {list_is} from "./../list/is.mjs";
export async function string_join(input, join_by) {
  await js_arguments_assert(list_is, string_is)(arguments);
  return input.join(join_by);
}
