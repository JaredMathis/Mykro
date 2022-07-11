import {m_js_string_is} from "./../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {ui_html_element_is} from "./html/element/is.mjs";
export async function ui_element(parent, tag_name) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is)(arguments);
  let result = document.createElement(tag_name);
  result.style.fontSize = "3.1vh";
  result.style.fontFamily = "Sans-Serif";
  result.style.margin = 0;
  result.style.marginBottom = "0.5vh";
  result.style.padding = 0;
  parent.appendChild(result);
  return result;
}
