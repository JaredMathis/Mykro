import {assert} from "./assert.mjs";
import {equals} from "./equals.mjs";
export async function boolean_is(b) {
  await assert(equals)(arguments.length, 1);
  return [true, false].includes(b);
}
