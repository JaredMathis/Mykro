import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { tree_traverse } from "./tree_traverse.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
import { list_where } from "./list_where.mjs";
import _ from "lodash";
export async function file_js_identifiers_get(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let ast = await file_js_parse(function_name);
    const ast_node_for_each = node => {
    };
  await tree_traverse(ast, node => {
    let values = await js_values(node);
    await list_where(values, v => await has_property(v, 'type') || _.isArray(v))
  }, ast_node_for_each)
}
async function js_values(node) {
    let properties = await js_properties(node);
    let children = await list_map(properties, p => await property_get(node, p));
    return children;
}

