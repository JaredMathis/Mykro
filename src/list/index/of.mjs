import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {defined_is} from "./../../defined/is.mjs";
import {list_is} from "./../is.mjs";
import {number_negative_not_is} from "./../../number/negative/not/is.mjs";
export async function list_index_of(list, item) {
  await js_arguments_assert(list_is, defined_is)(arguments);
  let index = list.indexOf(item);
  return {
    index,
    success: await number_negative_not_is(index)
  };
}
