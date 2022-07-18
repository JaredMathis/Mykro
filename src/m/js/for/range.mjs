import {list_range} from "./../../../list/range.mjs";
import {m_js_number_is} from "./../number/is.mjs";
import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import {m_js_for_each} from "./each.mjs";
import {m_js_function_is} from "./../function/is.mjs";
export async function m_js_for_range(count, for_each_item) {
  await m_js_arguments_assert(m_js_number_is, m_js_function_is)(arguments);
  await m_js_for_each(await list_range(count), for_each_item);
}
