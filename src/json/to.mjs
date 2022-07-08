import {arguments_assert} from "./../arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
export async function json_to(value) {
  await arguments_assert(defined_is)(arguments);
  return JSON.stringify(value, null, 2);
}