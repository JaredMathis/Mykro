import {string_is} from "./is.mjs";
import {arguments_assert} from "./../arguments/assert.mjs";
import {list_is} from "./../list/is.mjs";
export async function string_join(input, join_by) {
  await arguments_assert(list_is, string_is)(arguments);
  return input.join(join_by);
}
