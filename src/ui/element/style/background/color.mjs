import {m_js_string_is} from "./../../../../m/js/string/is.mjs";
import {ui_html_element_is} from "./../../../html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
import {random_probability_is} from "./../../../../random/probability/is.mjs";
export async function ui_element_style_background_color(element, color, alpha) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is, random_probability_is)(arguments);
  element.style.backgroundColor = `rgba(${color}, ${alpha})`;
}
