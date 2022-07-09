import {git_push_origin_head} from "./../../../../push/origin/head.mjs";
import {m_js_string_is} from "./../../../../../m/js/string/is.mjs";
import {git_branch_checkout} from "./../../../checkout.mjs";
import {m_js_arguments_assert} from "./../../../../../m/js/arguments/assert.mjs";
export async function git_branch_checkout_push_origin_head(branch_name) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  await git_branch_checkout(branch_name);
  await git_push_origin_head();
}
