import {command_line} from "./../command/line.mjs";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {string_is} from "./../string/is.mjs";
export async function git_commit(message) {
  await js_arguments_assert(string_is)(arguments);
  return await command_line(`git commit -m "${message}"`);
}
