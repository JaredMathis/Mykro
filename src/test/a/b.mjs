import {arguments_assert} from "./../../arguments/assert.mjs";
import { test_a_b_c } from "./b/c.mjs";
export async function test_a_b() {
  await arguments_assert()(arguments);
  test_a_b_c();
}
