import {string_prefix_if_remove} from "./../../../string/prefix/if/remove.mjs";
import {string_from_list} from "./../../../string/from/list.mjs";
import {string_size} from "./../../../string/size.mjs";
import {command_line} from "./../../../command/line.mjs";
import {arguments_assert} from "./../../../arguments/assert.mjs";
import {js_comment} from "./../../../js/comment.mjs";
import {string_starts_with} from "./../../../string/starts/with.mjs";
import {list_starting_at} from "./../../../list/starting/at.mjs";
import {string_to_list} from "./../../../string/to/list.mjs";
export async function git_branch_show_current() {
  await arguments_assert()(arguments);
  let result = await command_line(`git branch --show-current`);
  let stdout = result.stdout;
  const prefix = "*";
  stdout = await string_prefix_if_remove(stdout, prefix);
  js_comment(`remove leading space and trailing new line`);
  stdout = stdout.trim();
  return stdout;
}
