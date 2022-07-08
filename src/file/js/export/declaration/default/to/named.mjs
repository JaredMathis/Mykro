import {file_js_all_function_names} from "./../../../../all/function/names.mjs";
import {file_js_transform_ast} from "./../../../../transform/ast.mjs";
import {js_string_identifier_is} from "./../../../../../../js/string/identifier/is.mjs";
import {js_arguments_assert} from "./../../../../../../js/arguments/assert.mjs";
import {js_merge} from "./../../../../../../js/merge.mjs";
import {js_for_each} from "./../../../../../../js/for/each.mjs";
import { list_size } from "../../../../../../list/size.mjs";
import { list_single } from "../../../../../../list/single.mjs";
import { js_assert } from "../../../../../../js/assert.mjs";
import { js_equals } from "../../../../../../js/equals.mjs";
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
      if (node.type === 'ImportDeclaration') {
        if (await list_size(node.specifiers) === 1) {
          let specifier = await list_single(node.specifiers);
          if (specifier.type === 'ImportDefaultSpecifier') {
            await js_assert(js_equals)(specifier.local.type, 'Identifier');
          }
        }
      }
    });
  });
}
