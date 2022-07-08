
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
import { file_path_dirname } from './file_path_dirname.mjs';
import { json_to } from './json_to.mjs';
import { equals } from './equals.mjs';
import { assert } from './assert.mjs';
import { string_replace_all } from './string_replace_all.mjs';
import { string_starts_with } from './string_starts_with.mjs';
export async function file_js_imports_fix(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let match = await file_js_all_match_exact(function_name)
  let match_file_path = await property_get(match, 'file_path');
  await file_js_transform(function_name, async ast => {
    await es_traverse(ast, async node => {
      if (node.type === 'ImportDeclaration') {
        if (!await string_starts_with(node.source.value, '.')) {
          return;
        }
        let name;
          name = await es_node_import_declaration_single_name_get(node);
        let match_import = await file_js_all_match_exact(name)
        let import_path = path.relative(await file_path_dirname(match_file_path), match_import.file_path);
        import_path = ".\\" + import_path;
        import_path = await string_replace_all(import_path, '\\', '/');
        await assert(equals)(node.source.type, 'Literal');
        node.source.value = import_path;
      }
    })
  });
}
