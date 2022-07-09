import {git_push} from "./../push.mjs";
import {git_checkout_pull} from "./pull.mjs";
import {m_js_string_is} from "./../../m/js/string/is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {git_merge} from "./../merge.mjs";
import {m_js_for_each} from "./../../m/js/for/each.mjs";
import {m_js_comment} from "./../../m/js/comment.mjs";
export async function git_checkout_merge(merge_from, merge_into) {
  await m_js_arguments_assert(m_js_string_is, m_js_string_is)(arguments);
  await m_js_comment(`make sure both branches are up to date`);
  await m_js_for_each([merge_from, merge_into], async branch_name => {
    await git_checkout_pull(branch_name);
  });
  await git_merge(merge_from);
  await git_push();
}
