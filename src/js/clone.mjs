import {json_to} from "./../json/to.mjs";
import {js_defined_is} from "./defined/is.mjs";
import {js_arguments_assert} from "./arguments/assert.mjs";
import {json_from} from "./../json/from.mjs";
export async function js_clone(object) {
  await js_arguments_assert(js_defined_is)(arguments);
  return await json_from(await json_to(object));
}
