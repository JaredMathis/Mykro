import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../../../../m/js/defined/is.mjs";
import {list_index_of} from "./../../of.mjs";
import {list_is} from "./../../../is.mjs";
import {m_js_number_negative_not_is} from "./../../../../m/js/number/negative/not/is.mjs";
import {list_starting_at} from "./../../../starting/at.mjs";
export async function list_index_of_starting_at(list, item, starting_at) {
  await m_js_arguments_assert(list_is, m_js_defined_is, m_js_number_negative_not_is)(arguments);
  let sublist = await list_starting_at(list, starting_at);
  let result = await list_index_of(sublist, item);
  if (!result.success) {
    return result;
  }
  result.index += starting_at;
  return result;
}
