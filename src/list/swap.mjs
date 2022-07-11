import {m_js_number_is} from "./../m/js/number/is.mjs";
import {list_is} from "./is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
export async function list_swap(list, index_a, index_b) {
  await m_js_arguments_assert(list_is, m_js_number_is, m_js_number_is)(arguments);
  let temp = list[index_a];
  list[index_a] = list[index_b];
  list[index_b] = temp;
}
