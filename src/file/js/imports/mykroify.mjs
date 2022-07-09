import {m_js_number_at_most} from "./../../../m/js/number/at/most.mjs";
import {m_js_string_identifier_is} from "./../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {file_js_transform_ast} from "./../transform/ast.mjs";
import {file_js_all_mykro} from "./../all/mykro.mjs";
import {list_map} from "./../../../list/map.mjs";
import {list_contains} from "./../../../list/contains.mjs";
import {list_size} from "./../../../list/size.mjs";
import {list_single} from "./../../../list/single.mjs";
import {list_where} from "./../../../list/where.mjs";
import {m_js_assert} from "./../../../m/js/assert.mjs";
import {m_js_equals} from "./../../../m/js/equals.mjs";
import {file_path_relative} from "./../../path/relative.mjs";
export async function file_js_imports_mykroify(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  let match = await file_js_all_match_exact(function_name);
  let match_file_path = await property_get(match, "file_path");
  let files_mykro = await file_js_all_mykro();
  await file_js_transform_ast(function_name, async node => {
    if (node.type === "ImportDeclaration") {
      if (equals(await list_size(node.specifiers), 1)) {
        let specifier = await list_single(node.specifiers);
        if (equals(specifier.type, "ImportSpecifier")) {
          if (equals(specifier.imported.type, "Identifier")) {
            let imported_matches = await list_where(files_mykro, f => f.name === specifier.imported.name);
            await m_js_assert(m_js_number_at_most)(await list_size(imported_matches), 1);
            if (equals(await list_size(imported_matches), 1)) {
              await m_js_assert(m_js_equals)(node.source.type, "Literal");
              let imported_match = await list_single(imported_match);
              console.log({
                imported_match,
                match_file_path
              });
            }
          }
        }
      }
      list_contains(function_names);
    }
  });
}
