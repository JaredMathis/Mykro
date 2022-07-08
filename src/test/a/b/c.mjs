import {arguments_assert} from "./../../../arguments/assert.mjs";
export async function test_a_b_c() {
  await arguments_assert()(arguments);
}
