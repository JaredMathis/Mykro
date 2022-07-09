import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {test_a_b} from "./a/b.mjs";
import {test_a_b_d} from "./a/b/d.mjs";
export async function test_a() {
  await m_js_arguments_assert()(arguments);
  test_a_b();
  test_a_b_d();
}
