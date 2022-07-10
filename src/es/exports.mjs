import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../m/js/defined/is.mjs";
import {list_where} from "./../list/where.mjs";
import {m_js_property_get} from "./../m/js/property/get.mjs";
export async function es_exports(parsed) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  let body = await m_js_property_get(parsed, "body");
  let filtered = await list_where(body, async b => await m_js_property_get(b, "type") === "ExportNamedDeclaration");
  return filtered;
}
