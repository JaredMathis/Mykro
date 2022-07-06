import {command_line} from "./command_line.mjs";
import {string_is} from "./string_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function git_checkout(branch_name) {
  await arguments_assert(string_is)(arguments);
  return await command_line(`git checkout ${branch_name}`);
}
