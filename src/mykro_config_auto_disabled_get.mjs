import {js_property_path_initialize_get} from './js_property_path_initialize_get.mjs';

import { arguments_assert } from "./arguments_assert.mjs";

export async function mykro_config_auto_disabled_get() {
    await arguments_assert()(arguments);
    return await js_property_path_initialize_get(config, ['auto', 'disabled'], false);
}