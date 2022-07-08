import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_defined_is} from "./../js/defined/is.mjs";
import {equals} from "./../equals.mjs";
import {json_to} from "./../json/to.mjs";
export async function equals_json(a, b) {
  await js_arguments_assert(js_defined_is, js_defined_is)(arguments);
  return equals(await json_to(a), await json_to(b));
}
