import {string_is} from "./../string/is.mjs";
import {command_line} from "./../command/line.mjs";
import {arguments_assert} from "./../arguments/assert.mjs";
export async function git_merge(merge_from) {
  await arguments_assert(string_is)(arguments);
  return await command_line(`git merge --no-ff "${merge_from}"`);
}
