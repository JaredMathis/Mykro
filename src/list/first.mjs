import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_assert} from "./../js/assert.mjs";
import {list_is} from "./is.mjs";
import {list_size} from "./size.mjs";
import {number_at_least} from "./../number/at/least.mjs";
export async function list_first(list) {
  await js_arguments_assert(list_is)(arguments);
  await js_assert(number_at_least)(await list_size(list), 1);
  return list[0];
}
