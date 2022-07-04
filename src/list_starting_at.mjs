import {arguments_assert} from "./arguments_assert.mjs";
import {list_is} from "./list_is.mjs";
import {number_negative_not_is} from "./number_negative_not_is.mjs";
export async function list_starting_at(list, index) {
  await arguments_assert(list_is, number_negative_not_is)(arguments);
  return list.slice(index);
}
