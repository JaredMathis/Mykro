import { a } from "../a.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function atest_rest() {
  await arguments_assert()(arguments);
  a();
  a_b();
  a_b_c();
}
