import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {test_a} from "./a.mjs";
export async function test_b() {
  await m_js_arguments_assert()(arguments);
  test_a();
}
