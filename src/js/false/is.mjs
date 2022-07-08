import {equals} from "./../../equals.mjs";
import {defined_is} from "./../../defined/is.mjs";
import {js_arguments_assert} from "./../arguments/assert.mjs";
export async function js_false_is(value) {
  await js_arguments_assert(defined_is)(arguments);
  return equals(value, false);
}
