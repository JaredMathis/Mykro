import {arguments_assert} from "./../../../../../../arguments/assert.mjs";
import {assert} from "./../../../../../../assert.mjs";
import {defined_is} from "./../../../../../../defined/is.mjs";
import {equals_json} from "./../../../../../../equals/json.mjs";
import {for_each} from "./../../../../../../for/each.mjs";
import {list_single} from "./../../../../../../list/single.mjs";
import {property_get} from "./../../../../../../property/get.mjs";
export async function es_node_import_declaration_single_name_get(es_node_import_specifier) {
  await arguments_assert(defined_is)(arguments);
  let specifiers = await property_get(es_node_import_specifier, "specifiers");
  let specifier = await list_single(specifiers);
  let local = await property_get(specifier, "local");
  let imported = await property_get(specifier, "imported");
  await for_each([local, imported], async i => {
    await assert(defined_is, {
      specifier
    })(i);
  });
  await assert(equals_json, {
    specifier
  })(local, imported);
  return local.name;
}