import _ from "lodash";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../m/js/defined/is.mjs";
import {m_js_function_is} from "./../m/js/function/is.mjs";
import {m_js_properties} from "./../m/js/properties.mjs";
import {m_js_property_has} from "./../m/js/property/has.mjs";
import {list_map} from "./../list/map.mjs";
import {list_where} from "./../list/where.mjs";
import {m_js_property_get} from "./../m/js/property/get.mjs";
import {tree_traverse} from "./../tree/traverse.mjs";
export async function es_traverse(ast, ast_node_for_each) {
  await m_js_arguments_assert(m_js_defined_is, m_js_function_is)(arguments);
  await tree_traverse(ast, async node => {
    let values = await js_values(node);
    return await list_where(values, async v => v !== null && (await m_js_property_has(v, "type") || _.isArray(v)));
  }, ast_node_for_each);
}
async function js_values(node) {
  let properties = await m_js_properties(node);
  let children = await list_map(properties, async p => await m_js_property_get(node, p));
  return children;
}
