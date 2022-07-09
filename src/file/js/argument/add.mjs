import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {m_js_string_is} from "./../../../m/js/string/is.mjs";
import {m_js_string_identifier_is} from "./../../../m/js/string/identifier/is.mjs";
import {list_add} from "./../../../list/add.mjs";
import {list_size} from "./../../../list/size.mjs";
import {m_js_assert} from "./../../../m/js/assert.mjs";
import {m_js_equals} from "./../../../m/js/equals.mjs";
import {file_js_arguments_transform} from "./../arguments/transform.mjs";
import {es_function_declaration_param_get} from "./../../../es/function/declaration/param/get.mjs";
export async function file_js_argument_add(function_name, argument_name, argument_type) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_identifier_is, m_js_string_is)(arguments);
  await file_js_arguments_transform(function_name, async _arguments => {
    let {declaration, awaited_first_callee_arguments} = _arguments;
    await es_function_declaration_param_add(declaration, argument_name);
    await list_add(awaited_first_callee_arguments, es_identifier(argument_type));
  });
}
async function es_function_declaration_param_add(declaration, param_name) {
  let {existing, params} = await es_function_declaration_param_get(declaration, param_name);
  await m_js_assert(m_js_equals)(await list_size(existing), 0);
  let id = es_identifier(param_name);
  await list_add(params, id);
}
function es_identifier(identifier_name) {
  return {
    type: "Identifier",
    name: identifier_name
  };
}
