import {ui_element_style_button_generic} from "./generic.mjs";
import {ui_color_blue} from "./../../../color/blue.mjs";
import {ui_html_element_is} from "./../../../html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
export async function ui_element_style_button_primary(element) {
  await m_js_arguments_assert(ui_html_element_is)(arguments);
  const color = await ui_color_blue();
  return await ui_element_style_button_generic(element, color, 1, 0.3);
}
