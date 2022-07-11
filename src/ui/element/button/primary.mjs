import {ui_element_on} from "./../on.mjs";
import {ui_element_style_button_primary} from "./../style/button/primary.mjs";
import {ui_element_text} from "./../text.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function ui_element_button_primary(container, button_text) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is)(arguments);
  let next = await ui_element_text(container, "button", button_text);
  await ui_element_style_button_primary(next);
  await ui_element_on(next, "click", on_next);
}
