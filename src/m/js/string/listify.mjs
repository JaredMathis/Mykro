import {m_js_string_from_list} from "./from/list.mjs";
import {m_js_string_to_list} from "./to/list.mjs";
import {m_js_string_is} from "./is.mjs";
import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import {m_js_function_is} from "./../function/is.mjs";
export async function m_js_string_listify(s, mapping) {
  await m_js_arguments_assert(m_js_string_is, m_js_function_is)(arguments);
  let listified = await m_js_string_to_list(s);
  let result = await mapping(listified);
  let stringified = await m_js_string_from_list(result);
  return stringified;
}
