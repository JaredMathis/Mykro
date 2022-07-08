import {git_checkout} from "./git_checkout.mjs";
import {git_branch} from "./git_branch.mjs";
import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function git_branch_checkout(branch_name) {
  await arguments_assert(string_is)(arguments);
  await git_branch(branch_name);
  await git_checkout(branch_name);
}
