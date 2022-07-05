import {git_checkout_pull} from './git_checkout_pull.mjs';
import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import { git_merge } from './git_merge.mjs';
import { for_each } from './for_each.mjs';
import { js_comment } from './js_comment.mjs';
export async function git_checkout_merge(merge_from, merge_into) {
  await arguments_assert(string_is, string_is)(arguments);
  await js_comment(`make sure both branches are up to date`)
  await for_each([merge_into, merge_from], async branch_name => {
    await git_checkout_pull(branch_name)
  })
  await git_merge(merge_into)
}
