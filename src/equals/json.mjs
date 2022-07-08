import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_defined_is} from "./../js/defined/is.mjs";
import {js_equals} from "./../js/equals.mjs";
import {json_to} from "./../json/to.mjs";
export async function equals_json(a, b) {
  await js_arguments_assert(js_defined_is, js_defined_is)(arguments);
  return js_equals(await json_to(a), await json_to(b));
}
