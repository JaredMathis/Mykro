import {m_js_assert} from "./../assert.mjs";
import {m_js_equals} from "./../equals.mjs";
export async function m_js_boolean_is(b) {
  await m_js_assert(m_js_equals)(arguments.length, 1);
  return [true, false].includes(b);
}
