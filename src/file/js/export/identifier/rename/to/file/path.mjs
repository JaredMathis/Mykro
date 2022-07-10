import {m_js_string_identifier_is} from "./../../../../../../../m/js/string/identifier/is.mjs";
import {file_js_transform_ast} from "./../../../../../transform/ast.mjs";
import {m_js_arguments_assert} from "./../../../../../../../m/js/arguments/assert.mjs";
export async function file_js_export_identifier_rename_to_file_path(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  await file_js_transform_ast(function_name, async node => {
    if (node.type === "ExportNamedDeclaration") {
      console.log({
        node
      });
    }
  });
}
