import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../../m/js/defined/is.mjs";
import {list_is} from "./../is.mjs";
import {m_js_number_negative_not_is} from "./../../m/js/number/negative/not/is.mjs";
export async function list_index_of(list, item) {
  await m_js_arguments_assert(list_is, m_js_defined_is)(arguments);
  let index = list.indexOf(item);
  return {
    index,
    success: await m_js_number_negative_not_is(index)
  };
}
