import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {js_defined_is} from "./../../js/defined/is.mjs";
import {list_is} from "./../is.mjs";
import {js_number_negative_not_is} from "./../../js/number/negative/not/is.mjs";
export async function list_index_of(list, item) {
  await js_arguments_assert(list_is, js_defined_is)(arguments);
  let index = list.indexOf(item);
  return {
    index,
    success: await js_number_negative_not_is(index)
  };
}
