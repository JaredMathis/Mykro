import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {file_js_parse} from "./../parse.mjs";
import {m_js_string_identifier_is} from "./../../../m/js/string/identifier/is.mjs";
import {m_js_property_get} from "./../../../m/js/property/get.mjs";
import {list_where} from "./../../../list/where.mjs";
import {m_js_equals} from "./../../../m/js/equals.mjs";
export async function file_js_imports_get(function_name) {
  await m_js_arguments_assert(m_js_string_identifier_is)(arguments);
  let {ast} = await file_js_parse(function_name);
  let body = await m_js_property_get(ast, "body");
  let filtered = await list_where(body, async b => m_js_equals(await m_js_property_get(b, "type"), "ImportDeclaration"));
  return filtered;
}
