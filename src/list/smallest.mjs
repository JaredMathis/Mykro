import {m_js_function_call_arguments_first_2} from "./../m/js/function/call/arguments/first/2.mjs";
import {m_js_number_smaller} from "./../m/js/number/smaller.mjs";
import {list_reduce} from "./reduce.mjs";
import {list_is} from "./is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
export async function list_smallest(list) {
  await m_js_arguments_assert(list_is)(arguments);
  return await list_reduce(list, await m_js_function_call_arguments_first_2(m_js_number_smaller));
}
