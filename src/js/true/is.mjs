import {js_arguments_assert} from "./../arguments/assert.mjs";
import {js_defined_is} from "./../defined/is.mjs";
import {equals} from "./../../equals.mjs";
export async function js_true_is(value) {
  await js_arguments_assert(js_defined_is)(arguments);
  return equals(value, true);
}
