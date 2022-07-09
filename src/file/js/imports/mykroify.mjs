import {js_string_identifier_is} from "./../../../js/string/identifier/is.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {file_js_transform_ast} from "../transform/ast.mjs";
import { file_js_all_mykro } from "../all/mykro.mjs";
export async function file_js_imports_mykroify(function_name) {
  await js_arguments_assert(js_string_identifier_is)(arguments);
  let files_mykro = await file_js_all_mykro();
  await file_js_transform_ast(function_name, node => {
    if (node.type === 'ImportDeclaration') {

    }
  });
}
