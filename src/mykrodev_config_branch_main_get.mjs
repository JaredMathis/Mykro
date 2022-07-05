import {main} from './main.mjs';
import {mykrodev_config_save} from './mykrodev_config_save.mjs';
import {mykrodev_config_get} from './mykrodev_config_get.mjs';

import { arguments_assert } from "./arguments_assert.mjs";
import { js_property_has } from "./js_property_has.mjs";

export async function mykrodev_config_branch_main_get() {
    await arguments_assert()(arguments);
    let config = await mykrodev_config_get();
    await mykrodev_config_property_exists_ensure(
        config, config, 'branch', {});
    await mykrodev_config_property_exists_ensure(
        config, config.branch, 'main', 'main');
    return config.branch.main;
}

async function mykrodev_config_property_exists_ensure(
    config, object, property_name, default_value) {
    if (!await js_property_has(object, property_name)) {
        object[property_name] = default_value;
        await mykrodev_config_save(config);
    }
}
