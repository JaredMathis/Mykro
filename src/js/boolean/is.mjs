import {js_assert} from "./../assert.mjs";
import {js_equals} from "./../equals.mjs";
export async function js_boolean_is(b) {
  await js_assert(js_equals)(arguments.length, 1);
  return [true, false].includes(b);
}
