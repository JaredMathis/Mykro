import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {ui_html_element_is} from "./html/element/is.mjs";
export async function ui_element(parent, tag_name) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is)(arguments);
  parent.createElement(tag_name);
}
