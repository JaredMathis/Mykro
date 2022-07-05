import {git_checkout_pull} from './git_checkout_pull.mjs';
import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import { git_merge } from './git_merge.mjs';
export async function git_checkout_merge(merge_from, merge_into) {
  await arguments_assert(string_is, string_is)(arguments);
  await git_checkout_pull(merge_from)
  await git_merge(merge_into)
}
