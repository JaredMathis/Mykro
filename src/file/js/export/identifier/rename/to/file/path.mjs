import {m_js_arguments_assert} from "./../../../../../../../m/js/arguments/assert.mjs";
export async function file_js_export_identifier_rename_to_file_path() {
  await m_js_arguments_assert()(arguments);
  await file_js_transform_ast(function_name, async node => {
    if (node.type === "ExportNamedDeclaration") {

    }
  });
}
