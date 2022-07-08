import {string_from_list} from "./../from/list.mjs";
import {string_size} from "./../size.mjs";
import {list_starting_at} from "./../../list/starting/at.mjs";
import {string_starts_with} from "./../starts/with.mjs";
import {string_is} from "./../is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {js_assert} from "./../../js/assert.mjs";
import {string_to_list} from "./../to/list.mjs";
export async function string_prefix_remove(input, prefix) {
  await js_arguments_assert(string_is, string_is)(arguments);
  await js_assert(string_starts_with)(input, prefix);
  let input_as_list = await string_to_list(input);
  let result_as_list = await list_starting_at(input_as_list, await string_size(prefix));
  let result = await string_from_list(result_as_list);
  return result;
}
