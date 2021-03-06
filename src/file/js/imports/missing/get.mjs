import {es_node_import_declaration_single_name_get} from "./../../../../es/node/import/declaration/single/name/get.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
import {file_js_imports_get} from "./../get.mjs";
import {list_map} from "./../../../../list/map.mjs";
import {list_where} from "./../../../../list/where.mjs";
import {m_js_string_identifier_is} from "./../../../../m/js/string/identifier/is.mjs";
import {list_contains} from "./../../../../list/contains.mjs";
import {file_js_identifiers_get} from "./../../identifiers/get.mjs";
import {m_js_property_get} from "./../../../../m/js/property/get.mjs";
import {list_single} from "./../../../../list/single.mjs";
import {list_size} from "./../../../../list/size.mjs";
import {m_js_equals} from "./../../../../m/js/equals.mjs";
import {list_remove_try} from "./../../../../list/remove/try.mjs";
import {file_js_all_function_names} from "./../../all/function/names.mjs";
export async function file_js_imports_missing_get(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  let imports = await file_js_imports_get(function_name);
  let imports_with_single_non_default_specifier = await list_where(imports, async i => {
    let specifiers = await m_js_property_get(i, "specifiers");
    if (!m_js_equals(await list_size(specifiers), 1)) {
      return false;
    }
    let specifier = await list_single(specifiers);
    if (m_js_equals(await m_js_property_get(specifier, "type"), "ImportDefaultSpecifier")) {
      return false;
    }
    return true;
  });
  let import_names = await list_map(imports_with_single_non_default_specifier, async i => {
    return await es_node_import_declaration_single_name_get(i);
  });
  let identifiers = await file_js_identifiers_get(function_name);
  await list_remove_try(identifiers, function_name);
  let function_names = await file_js_all_function_names();
  let identifiers_for_functions = await list_where(identifiers, async i => await list_contains(function_names, i));
  let imports_missing = await list_where(identifiers_for_functions, async i => !await list_contains(import_names, i));
  return {
    imports_missing,
    identifiers
  };
}
