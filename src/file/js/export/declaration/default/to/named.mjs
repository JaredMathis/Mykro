import {file_js_all_function_names} from "./../../../../all/function/names.mjs";
import {file_js_transform_ast} from "./../../../../transform/ast.mjs";
import {js_string_identifier_is} from "./../../../../../../js/string/identifier/is.mjs";
import {js_arguments_assert} from "./../../../../../../js/arguments/assert.mjs";
import {js_merge} from "./../../../../../../js/merge.mjs";
import {js_for_each} from "./../../../../../../js/for/each.mjs";
export async function file_js_export_declaration_default_to_named(function_name) {
  await js_arguments_assert(js_string_identifier_is)(arguments);
  await file_js_transform_ast(function_name, async node => {
    if (node.type === "ExportDefaultDeclaration") {
      let merged = {
        type: "ExportNamedDeclaration",
        specifiers: [],
        source: null
      };
      await js_merge(node, merged);
    }
  });
  let function_names = await file_js_all_function_names();
  await js_for_each(function_names, async function_name_other => {
    await file_js_transform_ast(function_name_other, async node => {

    });
  });
}
