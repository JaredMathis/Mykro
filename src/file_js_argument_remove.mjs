import {arguments_assert} from "./arguments_assert.mjs";
import { file_js_arguments_transform } from "./file_js_arguments_transform.mjs";
import { list_single } from "./list_single.mjs";
import { es_function_declaration_param_get } from "./es_function_declaration_param_get.mjs";
import {string_identifier_is} from "./string_identifier_is.mjs";
export async function file_js_argument_remove(function_name, argument_name) {
  await arguments_assert(string_identifier_is, string_identifier_is)(arguments);
  
  await file_js_arguments_transform(function_name, async _arguments => {
    let {
        declaration,
        awaited_first_callee_arguments
    } = _arguments;
    let {existing, params} = await es_function_declaration_param_get(declaration, argument_name);
    let existing_single = await list_single(existing);
    let {index} = await list_remove(params, existing_single);

    await list_remove_at(awaited_first_callee_arguments, index);
})
}
