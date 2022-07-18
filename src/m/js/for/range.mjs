import {list_range} from "./../../../list/range.mjs";
import {m_js_number_is} from "./../number/is.mjs";
import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import {m_js_for_each} from "./each.mjs";
export async function m_js_for_range(count) {
  await m_js_arguments_assert(m_js_number_is)(arguments);
  m_js_for_each(await list_range());
}
