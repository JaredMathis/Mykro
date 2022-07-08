import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
import {js_function_is} from "./../js/function/is.mjs";
import {js_properties} from "./../js/properties.mjs";
import {js_property_has} from "./../js/property/has.mjs";
import {list_map} from "./../list/map.mjs";
import {list_where} from "./../list/where.mjs";
import {property_get} from "./../property/get.mjs";
import {tree_traverse} from "./../tree/traverse.mjs";
export async function es_traverse(ast, ast_node_for_each) {
  await js_arguments_assert(defined_is, js_function_is)(arguments);
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
