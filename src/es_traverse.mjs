
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";
import { js_function_is } from "./js_function_is.mjs";
import { tree_traverse } from "./tree_traverse.mjs";
export async function es_traverse(ast, ast_node_for_each) {
    await arguments_assert(defined_is, js_function_is)(arguments);
  await tree_traverse(ast, async node => {
    let values = await js_values(node);
    return await list_where(values, async v => v !== null && (await js_property_has(v, "type") || _.isArray(v)));
  }, ast_node_for_each);
}
async function js_values(node) {
  let properties = await js_properties(node);
  let children = await list_map(properties, async p => await property_get(node, p));
  return children;
}
