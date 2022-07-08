import {js_arguments_assert} from "./arguments/assert.mjs";
import {js_defined_is} from "./defined/is.mjs";
export async function js_properties(o) {
  await js_arguments_assert(js_defined_is)(arguments);
  return Object.keys(o);
}
