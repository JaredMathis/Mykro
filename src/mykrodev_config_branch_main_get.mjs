import {mykrodev_config_save} from './mykrodev_config_save.mjs';
import {mykrodev_config_get} from './mykrodev_config_get.mjs';

import { arguments_assert } from "./arguments_assert.mjs";
import { js_property_has } from "./js_property_has.mjs";

export async function mykrodev_config_branch_main_get() {
    await arguments_assert()(arguments);
    let config = await mykrodev_config_get();
    let branch_property_name = 'branch';
    let object = config;
    await mykrodev_config_property_exists_ensure(object, branch_property_name, config);
}

async function mykrodev_config_property_exists_ensure(object, branch_property_name, config) {
    if (!await js_property_has(object, branch_property_name)) {
        object[branch_property_name] = {};
        await mykrodev_config_save(config);
    }
}
