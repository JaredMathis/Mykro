import {m_js_for_each} from "./../m/js/for/each.mjs";
import {list_first} from "./first.mjs";
import {m_js_function_is} from "./../m/js/function/is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {list_is} from "./is.mjs";
export async function list_reduce(list, reducer) {
  await m_js_arguments_assert(list_is, m_js_function_is)(arguments);
  let result = await list_first(list);
  await m_js_for_each(list, async item => {
    result = await reducer(result, item);
  });
  return result;
}
