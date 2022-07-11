import {ui_element_on} from "./../on.mjs";
import {ui_element_style_button_primary} from "./../style/button/primary.mjs";
import {ui_element_text} from "./../text.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function ui_element_button_primary() {
  await m_js_arguments_assert()(arguments);
  let next = await ui_element_text(container, "button", "Another Example");
  await ui_element_style_button_primary(next);
  await ui_element_on(next, "click", on_next);
}
