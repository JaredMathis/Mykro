import {command_line} from "./../../../command/line.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
export async function git_push_origin_head() {
  await js_arguments_assert()(arguments);
  return await command_line(`git push -u origin HEAD`);
}
