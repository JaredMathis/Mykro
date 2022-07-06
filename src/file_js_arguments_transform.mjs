import {arguments_assert} from "./arguments_assert.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
import {es_function_exported} from "./es_function_exported.mjs";
import {list_first} from "./list_first.mjs";
import {es_unparse} from "./es_unparse.mjs";
import {file_overwrite} from "./file_overwrite.mjs";
import {file_js_name_to_path} from "./file_js_name_to_path.mjs";
import {json_to} from "./json_to.mjs";
import _ from "lodash";
import {property_get} from "./property_get.mjs";
import {assert} from "./assert.mjs";
import {equals} from "./equals.mjs";
import {file_js_transform} from "./file_js_transform.mjs";
export async function file_js_arguments_transform(function_name, transformer_arguments) {
  await arguments_assert(string_identifier_is, _.isFunction)(arguments);
  let transformer = async ast => {
    let function_exported = await es_function_exported(ast);
    let declaration = await property_get(function_exported, "declaration");
    let body = await property_get(declaration, "body");
    let body_block = await property_get(body, "body");
    let statement_first = await list_first(body_block);
    await assert(equals)(await property_get(statement_first, "type"), "ExpressionStatement");
    let expression_first = await property_get(statement_first, "expression");
    await assert(equals)(await property_get(expression_first, "type"), "AwaitExpression");
    let awaited_first = await property_get(expression_first, "argument");
    await assert(equals)(await property_get(awaited_first, "type"), "CallExpression");
    let awaited_first_arguments = await property_get(awaited_first, "arguments");
    await assert(equals)(await json_to(awaited_first_arguments), "[{\"type\":\"Identifier\",\"name\":\"arguments\"}]");
    let awaited_first_callee = await property_get(awaited_first, "callee");
    await es_function_call_to_is(awaited_first_callee, arguments_assert.name);
    let awaited_first_callee_arguments = await property_get(awaited_first_callee, "arguments");
    await transformer_arguments({
      declaration,
      awaited_first_callee_arguments
    });
  };
  await file_js_transform(function_name, transformer);
}
async function es_function_call_to_is(awaited_first_callee, expected_function_name) {
  await assert(equals)(await property_get(awaited_first_callee, "type"), "CallExpression");
  let awaited_first_callee_callee = await property_get(awaited_first_callee, "callee");
  await assert(equals)(await json_to(awaited_first_callee_callee), `{\"type\":\"Identifier\",\"name\":\"${expected_function_name}\"}`);
}
