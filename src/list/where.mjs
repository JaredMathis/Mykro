import {m_js_function_is} from "./../m/js/function/is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_for_each} from "./../m/js/for/each.mjs";
import {list_is} from "./is.mjs";
export async function list_where(list, predicate) {
  await m_js_arguments_assert(list_is, m_js_function_is)(arguments);
  let result = [];
  await m_js_for_each(list, async item => {
    if (await predicate(item)) {
      result.push(item);
    }
  });
  return result;
}
