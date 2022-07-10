import {file_js_all_identifier_rename} from "./../../../../../../all/identifier/rename.mjs";
import {list_single} from "./../../../../../../../../list/single.mjs";
import {list_size} from "./../../../../../../../../list/size.mjs";
import {m_js_equals} from "./../../../../../../../../m/js/equals.mjs";
import {list_add} from "./../../../../../../../../list/add.mjs";
import {es_traverse} from "./../../../../../../../../es/traverse.mjs";
import {file_js_transform} from "./../../../../../../transform.mjs";
import {m_js_string_identifier_is} from "./../../../../../../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../../../../../../m/js/arguments/assert.mjs";
import { m_js_boolean_is } from "../../../../../../../../m/js/boolean/is.mjs";
import { file_js_identifier_rename } from "../../../../../../identifier/rename.mjs";
export async function file_js_export_identifier_rename_to_file_path_generic(function_name, quick) {
  await m_js_arguments_assert(m_js_string_identifier_is, m_js_boolean_is)(arguments);
  await file_js_transform(function_name, async ast => {
    let result = [];
    await es_traverse(ast, async node => {
      if (node.type === "ExportNamedDeclaration") {
        await list_add(result, node);
      }
    });
    if (m_js_equals(await list_size(result), 1)) {
      let export_declaration = await list_single(result);
      let declaration = export_declaration.declaration;
      if (declaration.type === "FunctionDeclaration") {
        if (declaration.id.type === "Identifier") {
          let function_name_existing = declaration.id.name;
          if (!m_js_equals(function_name_existing, function_name)) {
            if (quick) {
              await file_js_identifier_rename(function_name, function_name_existing, function_name)
            } else {
              await file_js_all_identifier_rename(function_name_existing, function_name);
            }
          }
        }
      }
    }
  });
}
