import {mykro_config_save} from "./../../save.mjs";
import {m_js_property_has} from "./../../../../m/js/property/has.mjs";
import {m_js_arguments_assert} from "./../../../../m/js/arguments/assert.mjs";
import {m_js_defined_is} from "./../../../../m/js/defined/is.mjs";
import {m_js_string_is} from "./../../../../m/js/string/is.mjs";
export async function mykro_config_property_exists_ensure(config, object, property_name, default_value) {
  await m_js_arguments_assert(m_js_defined_is, m_js_defined_is, m_js_string_is, m_js_defined_is)(arguments);
  if (!await m_js_property_has(object, property_name)) {
    object[property_name] = default_value;
    await mykro_config_save(config);
  }
}
