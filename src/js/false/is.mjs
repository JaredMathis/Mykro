import {js_equals} from "./../equals.mjs";
import {js_defined_is} from "./../defined/is.mjs";
import {js_arguments_assert} from "./../arguments/assert.mjs";
export async function js_false_is(value) {
  await js_arguments_assert(js_defined_is)(arguments);
  return js_equals(value, false);
}
