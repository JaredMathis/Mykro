import {mykro_config_save} from './mykro_config_save.mjs';
import {js_property_has} from './js_property_has.mjs';

import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from './defined_is.mjs';
import { string_is } from './string_is.mjs';

export async function mykro_config_property_exists_ensure(config, object, property_name, default_value) {
    await arguments_assert(defined_is, defined_is, string_is, defined_is)(arguments);
    // TODO
}

async function mykro_config_property_exists_ensure(config, object, property_name, default_value) {
    if (!await js_property_has(object, property_name)) {
      object[property_name] = default_value;
      await mykro_config_save(config);
    }
  }