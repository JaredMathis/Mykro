import {arguments_assert} from "./arguments_assert.mjs";
import {defined_is} from "./defined_is.mjs";
import {list_index_of} from "./list_index_of.mjs";
import {list_is} from "./list_is.mjs";
import {number_negative_not_is} from "./number_negative_not_is.mjs";
import {list_starting_at} from "./list_starting_at.mjs";
export async function list_index_of_starting_at(list, item, starting_at) {
  await arguments_assert(list_is, defined_is, number_negative_not_is)(arguments);
  let sublist = await list_starting_at(list, starting_at);
  let result = await list_index_of(sublist, item);
  if (!result.success) {
    return result;
  }
  result.index += starting_at;
  return result;
}
