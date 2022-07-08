import {js_string_from_list} from "./../from/list.mjs";
import {js_string_size} from "./../size.mjs";
import {list_starting_at} from "./../../../list/starting/at.mjs";
import {js_string_starts_with} from "./../starts/with.mjs";
import {js_string_is} from "./../is.mjs";
import {js_arguments_assert} from "./../../arguments/assert.mjs";
import {js_assert} from "./../../assert.mjs";
import {js_string_to_list} from "./../to/list.mjs";
export async function js_string_prefix_remove(input, prefix) {
  await js_arguments_assert(js_string_is, js_string_is)(arguments);
  await js_assert(js_string_starts_with)(input, prefix);
  let input_as_list = await js_string_to_list(input);
  let result_as_list = await list_starting_at(input_as_list, await js_string_size(prefix));
  let result = await js_string_from_list(result_as_list);
  return result;
}
