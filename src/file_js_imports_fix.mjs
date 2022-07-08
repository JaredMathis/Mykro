import {es_traverse} from './es_traverse.mjs';
import {string_identifier_is} from './string_identifier_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_transform } from './file_js_transform.mjs';
import { file_js_all } from './file_js_all.mjs';
export async function file_js_imports_fix(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let files = await file_js_all();
  await file_js_transform(function_name, async ast => {
    await es_traverse(ast, async node => {
      if (node.type === 'ImportDeclaration') {

      }
    })
  });
}
