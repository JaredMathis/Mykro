import {m_js_string_identifier_is} from "./../../../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../../../m/js/arguments/assert.mjs";
import {file_js_transform_ast} from "./../../../transform/ast.mjs";
export async function file_js_imports_default_to_named(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  await file_js_transform_ast(function_name, node => {
    
  });
}
