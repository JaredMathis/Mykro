import {arguments_assert} from "./arguments_assert.mjs";
import {file_js_all} from "./file_js_all.mjs";
import {file_js_imports_get} from "./file_js_imports_get.mjs";
import {list_map} from "./list_map.mjs";
import {list_where} from "./list_where.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
import {list_contains} from "./list_contains.mjs";
import {file_js_identifiers_get} from "./file_js_identifiers_get.mjs";
import {property_get} from "./property_get.mjs";
import {list_single} from "./list_single.mjs";
import {assert} from "./assert.mjs";
import {equals_json} from "./equals_json.mjs";
import {list_remove} from "./list_remove.mjs";
import { for_each } from "./for_each.mjs";
import { defined_is } from "./defined_is.mjs";
import { list_size } from "./list_size.mjs";
export async function file_js_imports_missing_get(function_name) {
  await arguments_assert(string_identifier_is)(arguments);
  let imports = await file_js_imports_get(function_name);
  let imports_with_single_non_default_specifier = await list_where(imports, async i => {
    let specifiers = await property_get(i, "specifiers");
    if (equals(await list_size(specifiers), 1)) {
      return false;
    }
    let specifier = await list_single(specifiers);
    if (equals(await property_get(specifier, 'type'), 'ImportDefaultSpecifier')) {
      return false;
    }
    return true;
  });
  let import_names = await list_map(imports_with_single_non_default_specifier, async i => {
    let specifiers = await property_get(i, "specifiers");
    let specifier = await list_single(specifiers);
    let local = await property_get(specifier, "local");
    let imported = await property_get(specifier, "imported");
    await for_each([local, imported], async i => {
      await assert(defined_is, {specifier})(i);
    })
    await assert(equals_json, {specifier})(local, imported);
    return local.name;
  });
  let identifiers = await file_js_identifiers_get(function_name);
  await list_remove(identifiers, function_name);
  let functions = await file_js_all();
  let function_names = await list_map(functions, f => f.name);
  let identifiers_for_functions = await list_where(identifiers, async i => await list_contains(function_names, i));
  let imports_missing = await list_where(identifiers_for_functions, async i => !await list_contains(import_names, i));
  return {
    imports_missing
  };
}
