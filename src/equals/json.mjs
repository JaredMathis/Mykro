import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
import {equals} from "./../equals.mjs";
import {json_to} from "./../json/to.mjs";
export async function equals_json(a, b) {
  await js_arguments_assert(defined_is, defined_is)(arguments);
  return equals(await json_to(a), await json_to(b));
}
