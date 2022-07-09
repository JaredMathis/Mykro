import {m_js_string_is} from "./is.mjs";
import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import {list_is} from "./../../../list/is.mjs";
export async function m_js_string_join(input, join_by) {
  await m_js_arguments_assert(list_is, m_js_string_is)(arguments);
  return input.join(join_by);
}
