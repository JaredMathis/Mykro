import { m_js_defined_is } from "../defined/is.mjs";
import { m_js_tautology } from "../tautology.mjs";
import {m_js_arguments_assert} from "./../arguments/assert.mjs";
export async function m_js_undefined_is(value) {
  await m_js_arguments_assert(m_js_tautology)(arguments);
  return !await m_js_defined_is(value);
}
