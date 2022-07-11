import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import { m_js_string_is } from "./is.mjs";
export async function m_js_string_split(s, split_by) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  return s.split(split_by);
}
