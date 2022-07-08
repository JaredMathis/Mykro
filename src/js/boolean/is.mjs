import {js_assert} from "./../assert.mjs";
import {equals} from "./../../equals.mjs";
export async function js_boolean_is(b) {
  await js_assert(equals)(arguments.length, 1);
  return [true, false].includes(b);
}
