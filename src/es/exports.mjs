import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_defined_is} from "./../js/defined/is.mjs";
import {list_where} from "./../list/where.mjs";
import {property_get} from "./../property/get.mjs";
export async function es_exports(parsed) {
  await js_arguments_assert(js_defined_is)(arguments);
  let body = await property_get(parsed, "body");
  let filtered = await list_where(body, async b => await property_get(b, "type") === "ExportNamedDeclaration");
  return filtered;
}
