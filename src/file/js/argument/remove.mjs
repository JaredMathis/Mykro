import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {file_js_arguments_transform} from "./../arguments/transform.mjs";
import {list_single} from "./../../../list/single.mjs";
import {es_function_declaration_param_get} from "./../../../es/function/declaration/param/get.mjs";
import {m_js_string_identifier_is} from "./../../../m/js/string/identifier/is.mjs";
import {list_remove_at} from "./../../../list/remove/at.mjs";
import {list_remove} from "./../../../list/remove.mjs";
export async function file_js_argument_remove(function_name, argument_name) {
  await m_js_arguments_assert(m_js_string_identifier_is, m_js_string_identifier_is)(arguments);
  await file_js_arguments_transform(function_name, async _arguments => {
    let {declaration, awaited_first_callee_arguments} = _arguments;
    let {existing, params} = await es_function_declaration_param_get(declaration, argument_name);
    let existing_single = await list_single(existing);
    let {index} = await list_remove(params, existing_single);
    await list_remove_at(awaited_first_callee_arguments, index);
  });
}
