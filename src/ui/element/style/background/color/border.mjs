import {ui_element_style_background_color} from "./../color.mjs";
import {ui_element_style_border} from "./../../border.mjs";
import {m_js_string_is} from "./../../../../../m/js/string/is.mjs";
import {random_probability_is} from "./../../../../../random/probability/is.mjs";
import {ui_html_element_is} from "./../../../../html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../../m/js/arguments/assert.mjs";
export async function ui_element_style_background_color_border(element, color, border_opacity, background_opacity) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is, random_probability_is, random_probability_is)(arguments);
  await ui_element_style_border(element, `rgba(${color}, ${border_opacity})`);
  await ui_element_style_background_color(element, color, background_opacity);
}
