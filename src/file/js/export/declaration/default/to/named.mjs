import {file_js_transform_ast} from "./../../../../transform/ast.mjs";
import {js_string_identifier_is} from "./../../../../../../js/string/identifier/is.mjs";
import {js_arguments_assert} from "./../../../../../../js/arguments/assert.mjs";
import { js_merge } from "../../../../../../js/merge.mjs";
export async function file_js_export_declaration_default_to_named(file_name) {
  await js_arguments_assert(js_string_identifier_is)(arguments);
  await file_js_transform_ast(file_name, async node => {
    if (node.type === "ExportDefaultDeclaration") {
      let merged = {
        type: "ExportNamedDeclaration",
        specifiers: [],
        source: null,
      }
      await js_merge(node, merged);
    }
  });
}
