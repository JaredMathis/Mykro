import {command_line} from "./command_line.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
export async function git_push_origin_head() {
  await arguments_assert()(arguments);
  return await command_line(`git push -u origin HEAD`);
}
