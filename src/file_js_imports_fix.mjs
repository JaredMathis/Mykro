import {es_node_import_declaration_single_name_get} from './es_node_import_declaration_single_name_get.mjs';
import {es_traverse} from './es_traverse.mjs';
import {string_identifier_is} from './string_identifier_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_transform } from './file_js_transform.mjs';
import { file_js_all_match_exact } from './file_js_all_match_exact.mjs';
export async function file_js_imports_fix(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let match = await file_js_all_match_exact(function_name)
  console.log({match})
  await file_js_transform(function_name, async ast => {
    await es_traverse(ast, async node => {
      if (node.type === 'ImportDeclaration') {
        console.log(await es_node_import_declaration_single_name_get(node))
      }
    })
  });
}
