import {m_js_string_is} from "./../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {ui_html_element_is} from "./html/element/is.mjs";
import { result } from "lodash";
export async function ui_element(parent, tag_name) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is)(arguments);
  let result = parent.createElement(tag_name);
  parent.appendChild(result);
  return result;
}
