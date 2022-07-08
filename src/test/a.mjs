import {arguments_assert} from "./../arguments/assert.mjs";
export async function test_a() {
  await arguments_assert()(arguments);
}
