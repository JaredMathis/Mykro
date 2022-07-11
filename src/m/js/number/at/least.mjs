import { m_js_number_is } from "../is.mjs";
import {m_js_arguments_assert} from "./../../arguments/assert.mjs";
export async function m_js_number_at_least(value, minimum) {
  await m_js_arguments_assert(m_js_number_is, m_js_number_is)(arguments);
  return value >= minimum;
}
