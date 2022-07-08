import {command_line} from "./../command/line.mjs";
import {string_is} from "./../string/is.mjs";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
export async function git_branch(branch_name) {
  await js_arguments_assert(string_is)(arguments);
  return await command_line(`git branch ${branch_name}`);
}
