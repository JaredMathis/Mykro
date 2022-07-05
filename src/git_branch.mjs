import {string_is} from './string_is.mjs';
import {arguments_assert} from "./arguments_assert.mjs";
export async function git_branch(branch_name) {
  await arguments_assert(string_is)(arguments);
}
