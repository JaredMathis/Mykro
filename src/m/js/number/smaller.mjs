import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import { m_js_number_is } from "./is.mjs";
export async function m_js_number_smaller(a, b) {
  await m_js_arguments_assert(m_js_number_is, m_js_number_is)(arguments);
  if (a < b) {
    return a;
  }
  return b;
}
