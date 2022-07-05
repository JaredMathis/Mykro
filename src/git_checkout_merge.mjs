import {git_checkout} from './git_checkout.mjs';
import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function git_checkout_merge(merge_from, merge_into) {
  await arguments_assert(string_is, string_is)(arguments);
  await git_checkout(merge_from)
}
