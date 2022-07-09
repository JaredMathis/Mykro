import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../m/js/defined/is.mjs";
import {list_is} from "./is.mjs";
export async function list_add(list, item) {
  await m_js_arguments_assert(list_is, m_js_defined_is)(arguments);
  list.push(item);
}
