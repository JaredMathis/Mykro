import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {list_is} from "./../is.mjs";
import {m_js_number_negative_not_is} from "./../../m/js/number/negative/not/is.mjs";
export async function list_starting_at(list, index) {
  await m_js_arguments_assert(list_is, m_js_number_negative_not_is)(arguments);
  return list.slice(index);
}
