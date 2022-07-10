import {m_js_string_identifier_is} from "./../../../../../m/js/string/identifier/is.mjs";
import {m_js_arguments_assert} from "./../../../../../m/js/arguments/assert.mjs";
import {file_js_transform_ast} from "./../../../transform/ast.mjs";
import { es_import_declaration_default_to_named } from "../../../../../es/import/declaration/default/to/named.mjs";
import { m_js_tautology } from "../../../../../m/js/tautology.mjs";
export async function file_js_imports_default_to_named(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  await file_js_transform_ast(function_name, async node => {
    await es_import_declaration_default_to_named(node, m_js_tautology);
  });
}
