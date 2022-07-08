import {git_push} from "./../push.mjs";
import {git_checkout_pull} from "./pull.mjs";
import {string_is} from "./../../string/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {git_merge} from "./../merge.mjs";
import {for_each} from "./../../for/each.mjs";
import {js_comment} from "./../../js/comment.mjs";
export async function git_checkout_merge(merge_from, merge_into) {
  await js_arguments_assert(string_is, string_is)(arguments);
  await js_comment(`make sure both branches are up to date`);
  await for_each([merge_from, merge_into], async branch_name => {
    await git_checkout_pull(branch_name);
  });
  await git_merge(merge_from);
  await git_push();
}
