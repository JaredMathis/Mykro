import {list_is} from "./../../../../../list/is.mjs";
import {m_js_defined_is} from "./../../../../../m/js/defined/is.mjs";
import {m_js_arguments_assert} from "./../../../../../m/js/arguments/assert.mjs";
export async function file_js_all_for_each_generic(function_names, _arguments) {
  await m_js_arguments_assert(list_is, m_js_defined_is)(arguments);
}
