import { m_js_function_is } from "../m/js/function/is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import { list_is } from "./is.mjs";
export async function list_reduce(list, reducer) {
  await m_js_arguments_assert(list_is, m_js_function_is)(arguments);
  return list.reduce(reducer);
}
