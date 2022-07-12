import {ui_element_button_generic} from "./generic.mjs";
import {m_js_function_is} from "./../../../m/js/function/is.mjs";
import {m_js_string_is} from "./../../../m/js/string/is.mjs";
import {ui_html_element_is} from "./../../html/element/is.mjs";
import {ui_element_style_button_primary} from "./../style/button/primary.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function ui_element_button_primary(container, button_text, on_click) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is, m_js_function_is)(arguments);
  return ui_element_button_generic(container, button_text, on_click, ui_element_style_button_primary);
}
