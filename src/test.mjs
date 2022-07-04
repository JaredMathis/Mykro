import {arguments_assert} from "./arguments_assert.mjs";
import {defined_is} from "./defined_is.mjs";
export async function test(a, b) {
  await arguments_assert(defined_is, defined_is)(arguments);
}
