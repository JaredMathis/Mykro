import {json_from} from "./../../../json/from.mjs";
import {equals_json} from "./../../../equals/json.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {string_identifier_is} from "./../../../string/identifier/is.mjs";
import {es_function_exported} from "./../../../es/function/exported.mjs";
import {list_first} from "./../../../list/first.mjs";
import _ from "lodash";
import {property_get} from "./../../../property/get.mjs";
import {js_assert} from "./../../../js/assert.mjs";
import {equals} from "./../../../equals.mjs";
import {file_js_transform} from "./../transform.mjs";
export async function file_js_arguments_transform(function_name, transformer_arguments) {
  await js_arguments_assert(string_identifier_is, _.isFunction)(arguments);
  let transformer = async ast => {
    let function_exported = await es_function_exported(ast);
    let declaration = await property_get(function_exported, "declaration");
    let body = await property_get(declaration, "body");
    let body_block = await property_get(body, "body");
    let statement_first = await list_first(body_block);
    await js_assert(equals)(await property_get(statement_first, "type"), "ExpressionStatement");
    let expression_first = await property_get(statement_first, "expression");
    await js_assert(equals)(await property_get(expression_first, "type"), "AwaitExpression");
    let awaited_first = await property_get(expression_first, "argument");
    await js_assert(equals)(await property_get(awaited_first, "type"), "CallExpression");
    let awaited_first_arguments = await property_get(awaited_first, "arguments");
    await js_assert(equals_json)(await awaited_first_arguments, await json_from("[{\"type\":\"Identifier\",\"name\":\"arguments\"}]"));
    let awaited_first_callee = await property_get(awaited_first, "callee");
    await es_function_call_to_is(awaited_first_callee, js_arguments_assert.name);
    let awaited_first_callee_arguments = await property_get(awaited_first_callee, "arguments");
    await transformer_arguments({
      declaration,
      awaited_first_callee_arguments
    });
  };
  await file_js_transform(function_name, transformer);
}
async function es_function_call_to_is(awaited_first_callee, expected_function_name) {
  await js_assert(equals)(await property_get(awaited_first_callee, "type"), "CallExpression");
  let awaited_first_callee_callee = await property_get(awaited_first_callee, "callee");
  await js_assert(equals_json)(await awaited_first_callee_callee, await json_from(`{\"type\":\"Identifier\",\"name\":\"${expected_function_name}\"}`));
}
