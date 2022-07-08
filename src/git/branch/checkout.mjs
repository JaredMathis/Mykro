import {git_checkout} from "./../checkout.mjs";
import {git_branch} from "./../branch.mjs";
import {js_string_is} from "./../../js/string/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function git_branch_checkout(branch_name) {
  await js_arguments_assert(js_string_is)(arguments);
  await git_branch(branch_name);
  await git_checkout(branch_name);
}
