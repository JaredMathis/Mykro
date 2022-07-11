import {ui_html_element_is} from "./../../../html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
import {ui_element_style_background_color_border} from "./../background/color/border.mjs";
export async function ui_element_style_button_generic(element, color, border_opacity, background_opacity) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is, random_probability_is, random_probability_is)(arguments);
  element.style.cursor = "pointer";
  element.style.listStyleType = "none";
  await ui_element_style_background_color_border(element, color, border_opacity, background_opacity);
  element.style.width = "100%";
  element.style.boxSizing = "border-box";
}
