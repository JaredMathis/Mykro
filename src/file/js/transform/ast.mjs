import {es_traverse} from "./../../../es/traverse.mjs";
import {file_js_transform} from "./../transform.mjs";
import {js_function_is} from "./../../../js/function/is.mjs";
import {js_string_identifier_is} from "./../../../js/string/identifier/is.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
export async function file_js_transform_ast(function_name, ast_node_for_each) {
  await js_arguments_assert(js_string_identifier_is, js_function_is)(arguments);
  await file_js_transform(function_name, async ast => {
    await es_traverse(ast, ast_node_for_each);
  });
}
