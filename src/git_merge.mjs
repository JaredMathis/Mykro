import {string_is} from './string_is.mjs';
import {command_line} from "./command_line.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function git_merge(merge_from) {
  await arguments_assert(string_is)(arguments);
  return await command_line(`git merge "${merge_from}"`);
}
