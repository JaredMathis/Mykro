import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
import {js_defined_is} from "./../../../../js/defined/is.mjs";
import {list_index_of} from "./../../of.mjs";
import {list_is} from "./../../../is.mjs";
import {js_number_negative_not_is} from "./../../../../js/number/negative/not/is.mjs";
import {list_starting_at} from "./../../../starting/at.mjs";
export async function list_index_of_starting_at(list, item, starting_at) {
  await js_arguments_assert(list_is, js_defined_is, js_number_negative_not_is)(arguments);
  let sublist = await list_starting_at(list, starting_at);
  let result = await list_index_of(sublist, item);
  if (!result.success) {
    return result;
  }
  result.index += starting_at;
  return result;
}
