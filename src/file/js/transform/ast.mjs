import {es_traverse} from "./../../../es/traverse.mjs";
import {file_js_transform} from "./../transform.mjs";
import {m_js_function_is} from "./../../../m/js/function/is.mjs";
import {m_js_string_identifier_is} from "./../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function file_js_transform_ast(function_name, ast_node_for_each) {
  await m_js_arguments_assert(m_js_string_identifier_is, m_js_function_is)(arguments);
  await file_js_transform(function_name, async ast => {
    await es_traverse(ast, ast_node_for_each);
  });
}
