import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function ui_element_remove(element) {
  await m_js_arguments_assert(ui_html_element_is)(arguments);
  element.remove();
}
