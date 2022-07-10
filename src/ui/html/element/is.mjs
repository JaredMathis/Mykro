import {m_js_defined_is} from "./../../../m/js/defined/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function ui_html_element_is(input) {
  await m_js_arguments_assert(m_js_defined_is)(arguments);
  return input instanceof HTMLElement;
}
