import {ui_element_style_button_secondary} from "./../style/button/secondary.mjs";
import {m_js_function_is} from "./../../../m/js/function/is.mjs";
import {m_js_string_is} from "./../../../m/js/string/is.mjs";
import {ui_html_element_is} from "./../../html/element/is.mjs";
import {ui_element_on} from "./../on.mjs";
import {ui_element_style_button_primary} from "./../style/button/primary.mjs";
import {ui_element_text} from "./../text.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function ui_element_button_secondary(container, button_text, on_click) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is, m_js_function_is)(arguments);
  let style = ui_element_style_button_secondary;
  let button = await ui_element_text(container, "button", button_text);
  await style(button);
  await ui_element_on(button, "click", on_click);
  return button;
}
