import {a} from './a.mjs';
import {es_node_import_declaration_single_name_get} from './es_node_import_declaration_single_name_get.mjs';
import {es_traverse} from './es_traverse.mjs';
import {string_identifier_is} from './string_identifier_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_transform } from './file_js_transform.mjs';
import { file_js_all_match_exact } from './file_js_all_match_exact.mjs';
import { file_js_all } from './file_js_all.mjs';
import { property_get } from './property_get.mjs';
import { list_size } from './list_size.mjs';
import { list_where } from './list_where.mjs';
import { string_to_list } from './string_to_list.mjs';
import path from 'path'
export async function file_js_imports_fix(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let files = await file_js_all();
  let match = await file_js_all_match_exact(function_name)
  let match_file_path = await property_get(match, 'file_path');
  await file_js_transform(function_name, async ast => {
    await es_traverse(ast, async node => {
      if (node.type === 'ImportDeclaration') {
        let name = await es_node_import_declaration_single_name_get(node);
        let match2 = await file_js_all_match_exact(name)
        console.log({relative: path.relative(match_file_path, match2.file_path), name});
      }
    })
  });
}
