import {arguments_assert} from "./arguments_assert.mjs";
import {file_js_parse} from "./file_js_parse.mjs";
import {tree_traverse} from "./tree_traverse.mjs";
import {list_map} from "./list_map.mjs";
import {property_get} from "./property_get.mjs";
import {list_where} from "./list_where.mjs";
import _ from "lodash";
import {string_identifier_is} from "./string_identifier_is.mjs";
import {js_properties} from "./js_properties.mjs";
import {js_property_has} from "./js_property_has.mjs";
import {list_add} from "./list_add.mjs";
import {list_unique} from "./list_unique.mjs";
export async function file_js_identifiers_get(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let {ast} = await file_js_parse(function_name);
  let result = [];
  await es_traverse(ast, async node => {
    if (node.type === "Identifier") {
      await list_add(result, node.name);
    }
  });
  result = await list_unique(result);
  return result;
}
async function es_traverse(ast, ast_node_for_each) {
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
