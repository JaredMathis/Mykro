import {ui_html_element_is} from "./../../html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function ui_element_style_border(element) {
  await m_js_arguments_assert(ui_html_element_is)(arguments);
  element.style = {
    border: '0.3vh solid black',
    borderRadius: '2vh',
    padding: '1.3vh'
  }
  return element;
}
