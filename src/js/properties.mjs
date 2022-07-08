import {js_arguments_assert} from "./arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
export async function js_properties(o) {
  await js_arguments_assert(defined_is)(arguments);
  return Object.keys(o);
}
