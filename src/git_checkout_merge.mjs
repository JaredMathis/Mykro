import {string_is} from './string_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
export async function git_checkout_merge(merge_from) {
  await arguments_assert(string_is)(arguments);
}
