import {js_string_prefix_if_remove} from "./../../../js/string/prefix/if/remove.mjs";
import {js_string_from_list} from "./../../../js/string/from/list.mjs";
import {js_string_size} from "./../../../js/string/size.mjs";
import {command_line} from "./../../../command/line.mjs";
import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {js_comment} from "./../../../js/comment.mjs";
import {js_string_starts_with} from "./../../../js/string/starts/with.mjs";
import {list_starting_at} from "./../../../list/starting/at.mjs";
import {js_string_to_list} from "./../../../js/string/to/list.mjs";
export async function git_branch_show_current() {
  await js_arguments_assert()(arguments);
  let result = await command_line(`git branch --show-current`);
  let stdout = result.stdout;
  const prefix = "*";
  stdout = await js_string_prefix_if_remove(stdout, prefix);
  js_comment(`remove leading space and trailing new line`);
  stdout = stdout.trim();
  return stdout;
}
