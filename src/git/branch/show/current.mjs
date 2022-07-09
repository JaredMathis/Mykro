import {m_js_string_prefix_if_remove} from "./../../../m/js/string/prefix/if/remove.mjs";
import {m_js_string_from_list} from "./../../../m/js/string/from/list.mjs";
import {m_js_string_size} from "./../../../m/js/string/size.mjs";
import {command_line} from "./../../../command/line.mjs";
import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {m_js_comment} from "./../../../m/js/comment.mjs";
import {m_js_string_starts_with} from "./../../../m/js/string/starts/with.mjs";
import {list_starting_at} from "./../../../list/starting/at.mjs";
import {m_js_string_to_list} from "./../../../m/js/string/to/list.mjs";
export async function git_branch_show_current() {
  await m_js_arguments_assert()(arguments);
  let result = await command_line(`git branch --show-current`);
  let stdout = result.stdout;
  const prefix = "*";
  stdout = await m_js_string_prefix_if_remove(stdout, prefix);
  m_js_comment(`remove leading space and trailing new line`);
  stdout = stdout.trim();
  return stdout;
}
