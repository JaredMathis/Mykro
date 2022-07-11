import {ui_element_remove} from "./element/remove.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../m/js/defined/is.mjs";
import { m_js_property_get } from "../m/js/property/get.mjs";
export async function ui_view() {
  await m_js_arguments_assert()(arguments);
  let current;
  return {
    set: async constructor => {
      if (m_js_defined_is(current)) {
        await ui_element_remove(current);
      }
      let component = await constructor();
      current = await m_js_property_get(component, 'container');
    }
  };
}
