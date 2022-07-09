import {git_checkout_merge} from "./../checkout/merge.mjs";
import {mykro_config_branch_main_get} from "./../../mykro/config/branch/main/get.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {git_branch_show_current} from "./../branch/show/current.mjs";
export async function git_feature_complete() {
  await m_js_arguments_assert()(arguments);
  let current_branch = await git_branch_show_current();
  let main_branch = await mykro_config_branch_main_get();
  await git_checkout_merge(current_branch, main_branch);
}
