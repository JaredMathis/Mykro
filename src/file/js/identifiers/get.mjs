import {es_traverse} from "./../../../es/traverse.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {file_js_parse} from "./../parse.mjs";
import {tree_traverse} from "./../../../tree/traverse.mjs";
import {list_map} from "./../../../list/map.mjs";
import {m_js_property_get} from "./../../../m/js/property/get.mjs";
import {list_where} from "./../../../list/where.mjs";
import _ from "lodash";
import {m_js_string_identifier_is} from "./../../../m/js/string/identifier/is.mjs";
import {m_js_properties} from "./../../../m/js/properties.mjs";
import {m_js_property_has} from "./../../../m/js/property/has.mjs";
import {list_add} from "./../../../list/add.mjs";
import {list_unique} from "./../../../list/unique.mjs";
export async function file_js_identifiers_get(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
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
