import {equals} from "./../equals.mjs";
import {defined_is} from "./../defined/is.mjs";
import {arguments_assert} from "./../arguments/assert.mjs";
export async function false_is(value) {
  await arguments_assert(defined_is)(arguments);
  return equals(value, false);
}
