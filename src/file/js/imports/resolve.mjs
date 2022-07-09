import {file_path_relative} from "./../../path/relative.mjs";
import {es_node_import_declaration_single_name_get} from "./../../../es/node/import/declaration/single/name/get.mjs";
import {js_string_identifier_is} from "./../../../js/string/identifier/is.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {file_js_all_match_exact} from "./../all/match/exact.mjs";
import {property_get} from "./../../../property/get.mjs";
import {file_path_dirname} from "./../../path/dirname.mjs";
import {js_equals} from "./../../../js/equals.mjs";
import {js_assert} from "./../../../js/assert.mjs";
import {js_string_replace_all} from "./../../../js/string/replace/all.mjs";
import {js_string_starts_with} from "./../../../js/string/starts/with.mjs";
import {file_js_transform_ast} from "./../transform/ast.mjs";
export async function file_js_imports_resolve(function_name) {
  await js_arguments_assert(js_string_identifier_is)(arguments);
  let match = await file_js_all_match_exact(function_name);
  await file_js_transform_ast(function_name, async node => {
    if (node.type === "ImportDeclaration") {
      if (!await js_string_starts_with(node.source.value, ".")) {
        return;
      }
      let nname = await es_node_import_declaration_single_name_get(node);
      let match_import = await file_js_all_match_exact(name);
      let match_file_path = await property_get(match, "file_path");
      let import_path = await file_path_relative(await file_path_dirname(match_file_path), match_import.file_path);
      import_path = ".\\" + import_path;
      import_path = await js_string_replace_all(import_path, "\\", "/");
      await js_assert(js_equals)(node.source.type, "Literal");
      node.source.value = import_path;
    }
  });
}
