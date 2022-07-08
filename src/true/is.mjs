import {arguments_assert} from "./../arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
import {equals} from "./../equals.mjs";
export async function true_is(value) {
  await arguments_assert(defined_is)(arguments);
  return equals(value, true);
}