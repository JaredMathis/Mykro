import {es_node_import_declaration_single_name_get} from "./../../../es/node/import/declaration/single/name/get.mjs";
import {es_traverse} from "./../../../es/traverse.mjs";
import {js_string_identifier_is} from "./../../../js/string/identifier/is.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {file_js_transform} from "./../transform.mjs";
import {file_js_all_match_exact} from "./../all/match/exact.mjs";
import {file_js_all} from "./../all.mjs";
import {property_get} from "./../../../property/get.mjs";
import {list_size} from "./../../../list/size.mjs";
import {list_where} from "./../../../list/where.mjs";
import {js_string_to_list} from "./../../../js/string/to/list.mjs";
import path from "path";
import {file_path_dirname} from "./../../path/dirname.mjs";
import {json_to} from "./../../../json/to.mjs";
import {js_equals} from "./../../../js/equals.mjs";
import {js_assert} from "./../../../js/assert.mjs";
import {js_string_replace_all} from "./../../../js/string/replace/all.mjs";
import {js_string_starts_with} from "./../../../js/string/starts/with.mjs";
export async function file_js_imports_resolve(function_name) {
  await js_arguments_assert(js_string_identifier_is)(arguments);
  let match = await file_js_all_match_exact(function_name);
  let match_file_path = await property_get(match, "file_path");
  await file_js_transform(function_name, async ast => {
    await es_traverse(ast, async node => {
      if (node.type === "ImportDeclaration") {
        if (!await js_string_starts_with(node.source.value, ".")) {
          return;
        }
        let name;
        name = await es_node_import_declaration_single_name_get(node);
        let match_import = await file_js_all_match_exact(name);
        let import_path = path.relative(await file_path_dirname(match_file_path), match_import.file_path);
        import_path = ".\\" + import_path;
        import_path = await js_string_replace_all(import_path, "\\", "/");
        await js_assert(js_equals)(node.source.type, "Literal");
        node.source.value = import_path;
      }
    });
  });
}
