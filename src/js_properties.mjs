import {arguments_assert} from "./arguments_assert.mjs";
import {defined_is} from "./defined_is.mjs";
export async function js_properties(o) {
  await arguments_assert(defined_is)(arguments);
  return Object.keys(o);
}
