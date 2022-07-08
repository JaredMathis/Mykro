import {js_string_is} from "./is.mjs";
import {js_arguments_assert} from "./../arguments/assert.mjs";
import {list_is} from "./../../list/is.mjs";
export async function js_string_join(input, join_by) {
  await js_arguments_assert(list_is, js_string_is)(arguments);
  return input.join(join_by);
}
