import {command_line} from "./../command/line.mjs";
import {arguments_assert} from "./../arguments/assert.mjs";
import {string_is} from "./../string/is.mjs";
export async function git_commit(message) {
  await arguments_assert(string_is)(arguments);
  return await command_line(`git commit -m "${message}"`);
}
