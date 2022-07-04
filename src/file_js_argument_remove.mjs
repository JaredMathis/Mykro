import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_arguments_transform } from "./file_js_arguments_transform.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
export async function file_js_argument_remove(function_name, argument_name) {
  await arguments_assert(string_identifier_is, string_identifier_is)(arguments);
  
  await file_js_arguments_transform(function_name, async _arguments => {
    let {
        declaration,
        awaited_first_callee_arguments
    } = _arguments;
    await es_function_declaration_param_add(declaration, argument_name);
    await list_add(awaited_first_callee_arguments, es_identifier(argument_type))
})
}
