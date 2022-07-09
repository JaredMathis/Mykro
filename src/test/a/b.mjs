import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {test_a_b_d} from "./b/d.mjs";
export async function test_a_b() {
  await m_js_arguments_assert()(arguments);
  test_a_b_d();
}
