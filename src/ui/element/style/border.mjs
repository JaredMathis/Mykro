import {m_js_merge} from "./../../../m/js/merge.mjs";
import {ui_html_element_is} from "./../../html/element/is.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {m_js_string_is} from "./../../../m/js/string/is.mjs";
export async function ui_element_style_border(element, border_color) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is)(arguments);
  await m_js_merge(element.style, {
    border: `0.3vh solid ${border_color}`,
    borderRadius: "2vh",
    padding: "1.3vh"
  });
  return element;
}
