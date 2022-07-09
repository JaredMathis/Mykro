import {list_is} from "./../../../../list/is.mjs";
import {m_js_arguments_assert} from "./../../arguments/assert.mjs";
export async function m_js_string_from_list(list) {
  await m_js_arguments_assert(list_is)(arguments);
  return list.join("");
}
