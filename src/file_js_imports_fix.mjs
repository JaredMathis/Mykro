import {string_identifier_is} from './string_identifier_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_transform } from './file_js_transform.mjs';
export async function file_js_imports_fix(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  await file_js_transform(function_name, ast => {
    await es_traverse(ast, async node => {

    })
  });
}
