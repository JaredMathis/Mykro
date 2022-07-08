import {git_push_origin_head} from "./../../../../push/origin/head.mjs";
import {string_is} from "./../../../../../string/is.mjs";
import {git_branch_checkout} from "./../../../checkout.mjs";
import {js_arguments_assert} from "./../../../../../js/arguments/assert.mjs";
export async function git_branch_checkout_push_origin_head(branch_name) {
  await js_arguments_assert(string_is)(arguments);
  await git_branch_checkout(branch_name);
  await git_push_origin_head();
}
