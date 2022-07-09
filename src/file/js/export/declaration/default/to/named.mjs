import {m_js_clone} from "./../../../../../../m/js/clone.mjs";
import {file_js_all_function_names} from "./../../../../all/function/names.mjs";
import {file_js_transform_ast} from "./../../../../transform/ast.mjs";
import {m_js_string_identifier_is} from "./../../../../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../../../../m/js/arguments/assert.mjs";
import {m_js_merge} from "./../../../../../../m/js/merge.mjs";
import {m_js_for_each} from "./../../../../../../m/js/for/each.mjs";
import {list_size} from "./../../../../../../list/size.mjs";
import {list_single} from "./../../../../../../list/single.mjs";
import {m_js_assert} from "./../../../../../../m/js/assert.mjs";
import {m_js_equals} from "./../../../../../../m/js/equals.mjs";
export async function file_js_export_declaration_default_to_named(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  await file_js_transform_ast(function_name, async node => {
    if (node.type === "ExportDefaultDeclaration") {
      let merged = {
        type: "ExportNamedDeclaration",
        specifiers: [],
        source: null
      };
      await m_js_merge(node, merged);
    }
  });
  let function_names = await file_js_all_function_names();
  await m_js_for_each(function_names, async function_name_other => {
    await file_js_transform_ast(function_name_other, async node => {
      if (node.type === "ImportDeclaration") {
        if (await list_size(node.specifiers) === 1) {
          let specifier = await list_single(node.specifiers);
          if (specifier.type === "ImportDefaultSpecifier") {
            const local = specifier.local;
            await m_js_assert(m_js_equals)(local.type, "Identifier");
            if (local.name === function_name) {
              let imported = await m_js_clone(local);
              await m_js_merge(specifier, {
                type: "ImportSpecifier",
                imported
              });
            }
          }
        }
      }
    });
  });
}
