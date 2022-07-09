import {command_line} from "./../../../command/line.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
export async function git_push_origin_head() {
  await m_js_arguments_assert()(arguments);
  return await command_line(`git push -u origin HEAD`);
}
