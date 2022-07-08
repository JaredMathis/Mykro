import {string_from_list} from "./../../from/list.mjs";
import {string_size} from "./../../size.mjs";
import {list_starting_at} from "./../../../list/starting/at.mjs";
import {string_to_list} from "./../../to/list.mjs";
import {string_starts_with} from "./../../starts/with.mjs";
import {arguments_assert} from "./../../../arguments/assert.mjs";
import {string_is} from "./../../is.mjs";
export async function string_prefix_if_remove(s, prefix) {
  await arguments_assert(string_is, string_is)(arguments);
  if (await string_starts_with(s, prefix)) {
    let stdout_as_list = await string_to_list(s);
    let sublist = await list_starting_at(stdout_as_list, await string_size(prefix));
    s = await string_from_list(sublist);
  }
  return s;
}
