import {file_path_relative} from "./../../path/relative.mjs";
import {es_node_import_declaration_single_name_get} from "./../../../es/node/import/declaration/single/name/get.mjs";
import {m_js_string_identifier_is} from "./../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {file_js_all_match_exact} from "./../all/match/exact.mjs";
import {m_js_property_get} from "./../../../m/js/property/get.mjs";
import {file_path_dirname} from "./../../path/dirname.mjs";
import {m_js_equals} from "./../../../m/js/equals.mjs";
import {m_js_assert} from "./../../../m/js/assert.mjs";
import {m_js_string_replace_all} from "./../../../m/js/string/replace/all.mjs";
import {m_js_string_starts_with} from "./../../../m/js/string/starts/with.mjs";
import {file_js_transform_ast} from "./../transform/ast.mjs";
import {m_js_string_is} from "./../../../m/js/string/is.mjs";
export async function file_js_imports_resolve(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  let match = await file_js_all_match_exact(function_name);
  await file_js_transform_ast(function_name, async node => {
    if (node.type === "ImportDeclaration") {
      if (!await m_js_string_starts_with(node.source.value, ".")) {
        return;
      }
      let name = await es_node_import_declaration_single_name_get(node);
      if (!await m_js_string_is(name)) {
        return;
      }
      let match_import = await file_js_all_match_exact(name);
      let match_file_path = await m_js_property_get(match, "file_path");
      let import_path = await file_path_relative(await file_path_dirname(match_file_path), match_import.file_path);
      import_path = ".\\" + import_path;
      import_path = await m_js_string_replace_all(import_path, "\\", "/");
      await m_js_assert(m_js_equals)(node.source.type, "Literal");
      node.source.value = import_path;
    }
  });
}
