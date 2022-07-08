import {arguments_assert} from "./../../../../arguments/assert.mjs";
import {defined_is} from "./../../../../defined/is.mjs";
import {list_where} from "./../../../../list_where.mjs";
import {property_get} from "./../../../../property_get.mjs";
import {string_identifier_is} from "./../../../../string_identifier_is.mjs";
export async function es_function_declaration_param_get(declaration, param_name) {
  await arguments_assert(defined_is, string_identifier_is)(arguments);
  let params = await property_get(declaration, "params");
  let existing = await list_where(params, p => p.type === "Identifier" && p.name === param_name);
  return {
    existing,
    params
  };
}
