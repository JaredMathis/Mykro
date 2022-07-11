import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function ui_element_on(element, event_name, action) {
  await m_js_arguments_assert(ui_html_element_is, m_js_string_is, m_js_function_is)(arguments);
}
