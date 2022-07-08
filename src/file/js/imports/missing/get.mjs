import {es_node_import_declaration_single_name_get} from "./../../../../es/node/import/declaration/single/name/get.mjs";
import {arguments_assert} from "./../../../../arguments/assert.mjs";
import {file_js_all} from "./../../all.mjs";
import {file_js_imports_get} from "./../get.mjs";
import {list_map} from "./../../../../list/map.mjs";
import {list_where} from "./../../../../list/where.mjs";
import {string_identifier_is} from "./../../../../string/identifier/is.mjs";
import {list_contains} from "./../../../../list/contains.mjs";
import {file_js_identifiers_get} from "./../../identifiers/get.mjs";
import {property_get} from "./../../../../property/get.mjs";
import {list_single} from "./../../../../list/single.mjs";
import {list_size} from "./../../../../list/size.mjs";
import {equals} from "./../../../../equals.mjs";
import {list_remove_try} from "./../../../../list/remove/try.mjs";
export async function file_js_imports_missing_get(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let imports = await file_js_imports_get(function_name);
  let imports_with_single_non_default_specifier = await list_where(imports, async i => {
    let specifiers = await property_get(i, "specifiers");
    if (!equals(await list_size(specifiers), 1)) {
      return false;
    }
    let specifier = await list_single(specifiers);
    if (equals(await property_get(specifier, "type"), "ImportDefaultSpecifier")) {
      return false;
    }
    return true;
  });
  let import_names = await list_map(imports_with_single_non_default_specifier, async i => {
    return await es_node_import_declaration_single_name_get(i);
  });
  let identifiers = await file_js_identifiers_get(function_name);
  await list_remove_try(identifiers, function_name);
  let functions = await file_js_all();
  let function_names = await list_map(functions, f => f.name);
  let identifiers_for_functions = await list_where(identifiers, async i => await list_contains(function_names, i));
  let imports_missing = await list_where(identifiers_for_functions, async i => !await list_contains(import_names, i));
  return {
    imports_missing
  };
}
