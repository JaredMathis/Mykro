import {ui_html_element_is} from "./html/element/is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import { m_js_defined_is } from "../m/js/defined/is.mjs";
export async function ui_view(parent) {
  await m_js_arguments_assert(ui_html_element_is)(arguments);
  let current;
  return {
    set: async (constructor) => {
      if (m_js_defined_is(current)) {
        
      }
    }
  }
}
