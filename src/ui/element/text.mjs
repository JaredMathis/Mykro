import {m_js_string_is} from "./../../m/js/string/is.mjs";
import {ui_html_element_is} from "./../html/element/is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {ui_element} from "./../element.mjs";
import {ui_element_html_inner_set} from "./html/inner/set.mjs";
export async function ui_element_text(parent, tag_name, text) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is, m_js_string_is)(arguments);
  let result = await ui_element(parent, tag_name);
  await ui_element_html_inner_set(result, text);
  return result;
}
