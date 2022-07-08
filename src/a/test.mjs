import {a_b_c} from "./b/c.mjs";
import {a_b} from "./b.mjs";
import {a} from "./../a.mjs";
import {arguments_assert} from "./../arguments_assert.mjs";
export async function a_test() {
  await arguments_assert()(arguments);
  a();
  a_b();
  a_b_c();
}
