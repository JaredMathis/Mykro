import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_parse } from "./file_js_parse.mjs";
import { tree_traverse } from "./tree_traverse.mjs";
import { list_map } from "./list_map.mjs";
import { property_get } from "./property_get.mjs";
export async function file_js_identifiers_get(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let ast = await file_js_parse(function_name);
  await tree_traverse(ast, node => {
    return await js_values(node);
  })
}
async function js_values(node) {
    let properties = await js_properties(node);
    let children = await list_map(properties, property_get(node));
    return children;
}

