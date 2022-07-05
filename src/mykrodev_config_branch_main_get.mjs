import {mykrodev_config_get} from './mykrodev_config_get.mjs';

import { arguments_assert } from "./arguments_assert.mjs";
import { js_property_has } from "./js_property_has.mjs";

export async function mykrodev_config_branch_main_get() {
    await arguments_assert()(arguments);
    let config = await mykrodev_config_get();
    let branch = 'branch';
    if (!await js_property_has(config, branch)) {
        config[branch] = {};
        await mykrodev_config_save(config);
    }
}