import {js_string_identifier_is} from "./../../../js/string/identifier/is.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {file_js_transform_ast} from "../transform/ast.mjs";
import { file_js_all_mykro } from "../all/mykro.mjs";
import { list_map } from "../../../list/map.mjs";
import { list_contains } from "../../../list/contains.mjs";
import { list_size } from "../../../list/size.mjs";
import { list_single } from "../../../list/single.mjs";
import { list_where } from "../../../list/where.mjs";
import { js_assert } from "../../../js/assert.mjs";
export async function file_js_imports_mykroify(function_name) {
  await js_arguments_assert(js_string_identifier_is)(arguments);
  let files_mykro = await file_js_all_mykro();
  await file_js_transform_ast(function_name, node => {
    if (node.type === 'ImportDeclaration') {
      if (equals(await list_size(node.specifiers), 1)) {
        let specifier = await list_single(node.specifiers);
        if (equals(specifier.type, 'ImportSpecifier')) {
          if (equals(specifier.imported.type, 'Identifier')) {
            let matches = await list_where(files_mykro, f => f.name === specifier.imported.name);
            js_assert(js_number_at_most)(await list_size(matches), 1);
            if (equals(await list_size(matches), 1)) {

            }
          }
        }
      }
      list_contains(function_names )
    }
  });
}
