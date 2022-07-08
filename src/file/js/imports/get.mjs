import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {file_js_parse} from "./../parse.mjs";
import {string_identifier_is} from "./../../../string/identifier/is.mjs";
import {property_get} from "./../../../property/get.mjs";
import {list_where} from "./../../../list/where.mjs";
import {js_equals} from "./../../../js/equals.mjs";
export async function file_js_imports_get(function_name) {
  await js_arguments_assert(string_identifier_is)(arguments);
  let {ast} = await file_js_parse(function_name);
  let body = await property_get(ast, "body");
  let filtered = await list_where(body, async b => js_equals(await property_get(b, "type"), "ImportDeclaration"));
  return filtered;
}
