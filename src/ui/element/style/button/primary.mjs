import {ui_element_style_background_color} from "./../background/color.mjs";
import {ui_color_blue} from "./../../../color/blue.mjs";
import {ui_element_style_border} from "./../border.mjs";
import {ui_html_element_is} from "./../../../html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
export async function ui_element_style_button_primary(element) {
  await m_js_arguments_assert(ui_html_element_is)(arguments);
  element.style.cursor = "pointer";
  element.style.listStyleType = "none";
  await ui_element_style_border(element, `rgba(${await ui_color_blue()}, 1)`);
  await ui_element_style_background_color(element, await ui_color_blue(), 0.3);
  element.style.width = '100%';
}
