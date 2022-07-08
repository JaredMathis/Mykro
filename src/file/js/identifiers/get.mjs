import {es_traverse} from "./../../../es/traverse.mjs";
import {arguments_assert} from "./../../../arguments/assert.mjs";
import {file_js_parse} from "./../parse.mjs";
import {tree_traverse} from "./../../../tree/traverse.mjs";
import {list_map} from "./../../../list/map.mjs";
import {property_get} from "./../../../property/get.mjs";
import {list_where} from "./../../../list/where.mjs";
import _ from "lodash";
import {string_identifier_is} from "./../../../string/identifier/is.mjs";
import {js_properties} from "./../../../js/properties.mjs";
import {js_property_has} from "./../../../js/property/has.mjs";
import {list_add} from "./../../../list/add.mjs";
import {list_unique} from "./../../../list/unique.mjs";
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
