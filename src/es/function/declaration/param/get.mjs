import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../../../../m/js/defined/is.mjs";
import {list_where} from "./../../../../list/where.mjs";
import {property_get} from "./../../../../property/get.mjs";
import {m_js_string_identifier_is} from "./../../../../m/js/string/identifier/is.mjs";
export async function es_function_declaration_param_get(declaration, param_name) {
  await m_js_arguments_assert(m_js_defined_is, m_js_string_identifier_is)(arguments);
  let params = await property_get(declaration, "params");
  let existing = await list_where(params, p => p.type === "Identifier" && p.name === param_name);
  return {
    existing,
    params
  };
}
