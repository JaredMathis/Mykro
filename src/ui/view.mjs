import {ui_element} from "./element.mjs";
import {ui_element_remove} from "./element/remove.mjs";
import {ui_html_element_is} from "./html/element/is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../m/js/defined/is.mjs";
import {m_js_property_get} from "./../m/js/property/get.mjs";
export async function ui_view(parent) {
  let container = await ui_element(parent, "div");
  await m_js_arguments_assert(ui_html_element_is)(arguments);
  let current;
  return {
    container,
    view_set: async constructor => {
      if (await m_js_defined_is(current)) {
        await ui_element_remove(current);
      }
      let component = await constructor(container);
      current = await m_js_property_get(component, "container");
    }
  };
}
