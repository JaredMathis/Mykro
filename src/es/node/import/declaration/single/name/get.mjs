import {m_js_arguments_assert} from "./../../../../../../m/js/arguments/assert.mjs";
import {m_js_assert} from "./../../../../../../m/js/assert.mjs";
import {m_js_defined_is} from "./../../../../../../m/js/defined/is.mjs";
import {m_js_equals_json} from "./../../../../../../m/js/equals/json.mjs";
import {m_js_for_each} from "./../../../../../../m/js/for/each.mjs";
import {list_single} from "./../../../../../../list/single.mjs";
import {property_get} from "./../../../../../../property/get.mjs";
export async function es_node_import_declaration_single_name_get(es_node_import_specifier) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  let specifiers = await property_get(es_node_import_specifier, "specifiers");
  let specifier = await list_single(specifiers);
  if (specifier.type === "ImportDefaultSpecifier") {
    return;
  }
  let local = await property_get(specifier, "local");
  let imported = await property_get(specifier, "imported");
  await m_js_for_each([local, imported], async i => {
    await m_js_assert(m_js_defined_is, {
      specifier
    })(i);
  });
  await m_js_assert(m_js_equals_json, {
    specifier
  })(local, imported);
  return local.name;
}
