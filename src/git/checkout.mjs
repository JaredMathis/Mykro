import {command_line} from "./../command/line.mjs";
import {js_string_is} from "./../js/string/is.mjs";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
export async function git_checkout(branch_name) {
  await js_arguments_assert(js_string_is)(arguments);
  return await command_line(`git checkout ${branch_name}`);
}
