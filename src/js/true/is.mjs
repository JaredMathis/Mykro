import {js_arguments_assert} from "./../arguments/assert.mjs";
import {js_defined_is} from "./../defined/is.mjs";
import {js_equals} from "./../equals.mjs";
export async function js_true_is(value) {
  await js_arguments_assert(js_defined_is)(arguments);
  return js_equals(value, true);
}
