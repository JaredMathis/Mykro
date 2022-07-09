import {git_checkout} from "./../checkout.mjs";
import {git_branch} from "./../branch.mjs";
import {m_js_string_is} from "./../../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function git_branch_checkout(branch_name) {
  await m_js_arguments_assert(m_js_string_is)(arguments);
  await git_branch(branch_name);
  await git_checkout(branch_name);
}
