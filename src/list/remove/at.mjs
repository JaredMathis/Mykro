import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {list_is} from "./../is.mjs";
import {m_js_number_is} from "./../../m/js/number/is.mjs";
export async function list_remove_at(list, index) {
  await m_js_arguments_assert(list_is, m_js_number_is)(arguments);
  list.splice(index, 1);
}
