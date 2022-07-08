import {arguments_assert} from "./../arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
import {list_where} from "./../list_where.mjs";
import {property_get} from "./../property_get.mjs";
export async function es_exports(parsed) {
  await arguments_assert(defined_is)(arguments);
  let body = await property_get(parsed, "body");
  let filtered = await list_where(body, async b => await property_get(b, "type") === "ExportNamedDeclaration");
  return filtered;
}
