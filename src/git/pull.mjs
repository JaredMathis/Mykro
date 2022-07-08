import {command_line} from "./../command/line.mjs";
import {arguments_assert} from "./../arguments/assert.mjs";
export async function git_pull() {
  await arguments_assert()(arguments);
  return await command_line(`git pull`);
}
