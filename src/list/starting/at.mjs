import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {list_is} from "./../is.mjs";
import {number_negative_not_is} from "./../../number/negative/not/is.mjs";
export async function list_starting_at(list, index) {
  await js_arguments_assert(list_is, number_negative_not_is)(arguments);
  return list.slice(index);
}
