import {ui_element_style_button_generic} from "./generic.mjs";
import {ui_html_element_is} from "./../../../html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
export async function ui_element_style_button_secondary(element) {
  await m_js_arguments_assert(ui_html_element_is)(arguments);
  return await ui_element_style_button_generic(element, `1,1,1`, 0.2, 0.12);
}
