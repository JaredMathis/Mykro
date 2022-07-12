import {m_js_function_is} from "../../../m/js/function/is.mjs";
import {m_js_string_is} from "../../../m/js/string/is.mjs";
import {ui_html_element_is} from "../../html/element/is.mjs";
import {ui_element_on} from "../on.mjs";
import {ui_element_text} from "../text.mjs";
import {m_js_arguments_assert} from "../../../m/js/arguments/assert.mjs";
export async function ui_element_button_generic(container, button_text, on_click, style) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is, m_js_function_is, m_js_function_is)(arguments);
  let button = await ui_element_text(container, "button", button_text);
  await style(button);
  await ui_element_on(button, "click", on_click);
  return button;
}
