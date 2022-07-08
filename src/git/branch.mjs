import {command_line} from "./../command/line.mjs";
import {string_is} from "./../string_is.mjs";
import {arguments_assert} from "./../arguments/assert.mjs";
export async function git_branch(branch_name) {
  await arguments_assert(string_is)(arguments);
  return await command_line(`git branch ${branch_name}`);
}
