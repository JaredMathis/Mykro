import {js_string_is} from "./../../js/string/is.mjs";
import {git_branch_checkout_push_origin_head} from "./../branch/checkout/push/origin/head.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function git_feature_start(branch_name) {
  await js_arguments_assert(js_string_is)(arguments);
  await git_branch_checkout_push_origin_head(branch_name);
}
