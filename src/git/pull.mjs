import {command_line} from "./../command/line.mjs";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
export async function git_pull() {
  await js_arguments_assert()(arguments);
  return await command_line(`git pull`);
}
