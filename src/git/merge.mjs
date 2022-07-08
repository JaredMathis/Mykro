import {string_is} from "./../string/is.mjs";
import {command_line} from "./../command/line.mjs";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
export async function git_merge(merge_from) {
  await js_arguments_assert(string_is)(arguments);
  return await command_line(`git merge --no-ff "${merge_from}"`);
}
