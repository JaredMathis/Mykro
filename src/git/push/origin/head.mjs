import {command_line} from "./../../../command/line.mjs";
import {arguments_assert} from "./../../../arguments/assert.mjs";
export async function git_push_origin_head() {
  await arguments_assert()(arguments);
  return await command_line(`git push -u origin HEAD`);
}
