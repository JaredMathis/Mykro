import {git_checkout_merge} from './git_checkout_merge.mjs';
import {mykrodev_config_branch_main_get} from './mykrodev_config_branch_main_get.mjs';

import { arguments_assert } from "./arguments_assert.mjs";
import { git_branch_show_current } from "./git_branch_show_current.mjs";

export async function git_feature_complete() {
    await arguments_assert()(arguments);
    let current_branch = await git_branch_show_current();
    let main_branch = await mykrodev_config_branch_main_get();

    git_checkout_merge()
}