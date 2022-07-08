import {js_defined_is} from "./defined/is.mjs";
import {js_arguments_assert} from "./arguments/assert.mjs";
import { js_properties } from "./properties.mjs";
import { js_for_each } from "./for/each.mjs";
export async function js_merge(into, from) {
  await js_arguments_assert(js_defined_is, js_defined_is)(arguments);
  let properties = await js_properties(from)
  await js_for_each(properties, async property=> {
    
  })
}
