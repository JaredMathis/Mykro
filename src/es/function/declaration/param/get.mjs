import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
import {defined_is} from "./../../../../defined/is.mjs";
import {list_where} from "./../../../../list/where.mjs";
import {property_get} from "./../../../../property/get.mjs";
import {string_identifier_is} from "./../../../../string/identifier/is.mjs";
export async function es_function_declaration_param_get(declaration, param_name) {
  await js_arguments_assert(defined_is, string_identifier_is)(arguments);
  let params = await property_get(declaration, "params");
  let existing = await list_where(params, p => p.type === "Identifier" && p.name === param_name);
  return {
    existing,
    params
  };
}
