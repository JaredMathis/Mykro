import {string_prefix_if_remove} from "./string_prefix_if_remove.mjs";
import {string_from_list} from "./string_from_list.mjs";
import {string_size} from "./string_size.mjs";
import {command_line} from "./command_line.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import {js_comment} from "./js_comment.mjs";
import {string_starts_with} from "./string_starts_with.mjs";
import {list_starting_at} from "./list_starting_at.mjs";
import {string_to_list} from "./string_to_list.mjs";
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
