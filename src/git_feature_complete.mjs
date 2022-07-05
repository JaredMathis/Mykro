
import { arguments_assert } from "./arguments_assert.mjs";
import { git_branch_show_current } from "./git_branch_show_current.mjs";

export async function git_feature_complete() {
    await arguments_assert()(arguments);
    let current_branch = await git_branch_show_current();
    
}