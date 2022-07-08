import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {test_a_b_d} from "./b/d.mjs";
export async function test_a_b() {
  await js_arguments_assert()(arguments);
  test_a_b_d();
}
