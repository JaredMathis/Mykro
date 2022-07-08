import {js_defined_is} from "./defined/is.mjs";
import {js_arguments_assert} from "./arguments/assert.mjs";
export async function js_merge(into, from) {
  await js_arguments_assert(js_defined_is, js_defined_is)(arguments);
}
