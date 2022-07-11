import {json_from} from "./../../../json/from.mjs";
import {m_js_equals_json} from "./../../../m/js/equals/json.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {m_js_string_identifier_is} from "./../../../m/js/string/identifier/is.mjs";
import {es_function_exported} from "./../../../es/function/exported.mjs";
import {list_first} from "./../../../list/first.mjs";
import _ from "lodash";
import {m_js_property_get} from "./../../../m/js/property/get.mjs";
import {m_js_assert} from "./../../../m/js/assert.mjs";
import {m_js_equals} from "./../../../m/js/equals.mjs";
import {file_js_transform} from "./../transform.mjs";
import { m_js_function_is } from "../../../m/js/function/is.mjs";
export async function file_js_arguments_transform(function_name, transformer_arguments) {
  await m_js_arguments_assert(m_js_string_identifier_is, m_js_function_is)(arguments);
  let transformer = async ast => {
    let function_exported = await es_function_exported(ast);
    let declaration = await m_js_property_get(function_exported, "declaration");
    let body = await m_js_property_get(declaration, "body");
    let body_block = await m_js_property_get(body, "body");
    let statement_first = await list_first(body_block);
    await m_js_assert(m_js_equals)(await m_js_property_get(statement_first, "type"), "ExpressionStatement");
    let expression_first = await m_js_property_get(statement_first, "expression");
    await m_js_assert(m_js_equals)(await m_js_property_get(expression_first, "type"), "AwaitExpression");
    let awaited_first = await m_js_property_get(expression_first, "argument");
    await m_js_assert(m_js_equals)(await m_js_property_get(awaited_first, "type"), "CallExpression");
    let awaited_first_arguments = await m_js_property_get(awaited_first, "arguments");
    await m_js_assert(m_js_equals_json)(await awaited_first_arguments, await json_from("[{\"type\":\"Identifier\",\"name\":\"arguments\"}]"));
    let awaited_first_callee = await m_js_property_get(awaited_first, "callee");
    await es_function_call_to_is(awaited_first_callee, m_js_arguments_assert.name);
    let awaited_first_callee_arguments = await m_js_property_get(awaited_first_callee, "arguments");
    await transformer_arguments({
      declaration,
      awaited_first_callee_arguments
    });
  };
  await file_js_transform(function_name, transformer);
}
async function es_function_call_to_is(awaited_first_callee, expected_function_name) {
  await m_js_assert(m_js_equals)(await m_js_property_get(awaited_first_callee, "type"), "CallExpression");
  let awaited_first_callee_callee = await m_js_property_get(awaited_first_callee, "callee");
  await m_js_assert(m_js_equals_json)(await awaited_first_callee_callee, await json_from(`{\"type\":\"Identifier\",\"name\":\"${expected_function_name}\"}`));
}
