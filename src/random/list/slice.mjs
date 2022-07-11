import {list_take} from "./../../list/take.mjs";
import {list_starting_at} from "./../../list/starting/at.mjs";
import {random_number} from "./../number.mjs";
import {list_max_index} from "./../../list/max/index.mjs";
import {m_js_number_is} from "./../../m/js/number/is.mjs";
import {list_is} from "./../../list/is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function random_list_slice(list, slice_size) {
  await m_js_arguments_assert(list_is, m_js_number_is)(arguments);
  let max_index = await list_max_index(list);
  let max_selectable_index = max_index - (slice_size - 1);
  let start_index = await random_number(0, max_selectable_index);
  let size = await random_number(1, slice_size);
  let starting_at = await list_starting_at(list, start_index);
  let shortened = await list_take(starting_at, size);
  return shortened;
}
