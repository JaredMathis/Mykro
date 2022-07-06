import {string_is} from "./string_is.mjs";
import {git_branch_checkout_push_origin_head} from "./git_branch_checkout_push_origin_head.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function git_feature_start(branch_name) {
  await arguments_assert(string_is)(arguments);
  await git_branch_checkout_push_origin_head(branch_name);
}
