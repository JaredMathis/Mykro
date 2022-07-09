import {file_js_transform_ast} from "./../transform/ast.mjs";
import {m_js_string_identifier_is} from "./../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function file_js_ast_log(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  await file_js_transform_ast(function_name, node => {
    console.log({
      node
    });
  });
}
