import {mykro_config_save} from "./../../save.mjs";
import {js_property_has} from "./../../../../js/property/has.mjs";
import {js_arguments_assert} from "./../../../../js/arguments/assert.mjs";
import {js_defined_is} from "./../../../../js/defined/is.mjs";
import {js_string_is} from "./../../../../js/string/is.mjs";
export async function mykro_config_property_exists_ensure(config, object, property_name, default_value) {
  await js_arguments_assert(js_defined_is, js_defined_is, js_string_is, js_defined_is)(arguments);
  if (!await js_property_has(object, property_name)) {
    object[property_name] = default_value;
    await mykro_config_save(config);
  }
}
