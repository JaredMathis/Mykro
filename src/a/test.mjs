import {a_b_c} from "./a_b_c.mjs";
import {a_b} from "./a_b.mjs";
import {a} from "../a.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function atest_rest() {
  await arguments_assert()(arguments);
  a();
  a_b();
  a_b_c();
}
