import {js_arguments_assert} from "./../arguments/assert.mjs";
import {defined_is} from "./../../defined/is.mjs";
import {equals} from "./../../equals.mjs";
export async function js_true_is(value) {
  await js_arguments_assert(defined_is)(arguments);
  return equals(value, true);
}
