import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {test_a_b} from "./a/b.mjs";
import {test_a_b_d} from "./a/b/d.mjs";
export async function test_a() {
  await js_arguments_assert()(arguments);
  test_a_b();
  test_a_b_d();
}
