import {arguments_assert} from "./../../arguments/assert.mjs";
import {list_is} from "./../is.mjs";
import {number_is} from "./../../number_is.mjs";
export async function list_remove_at(list, index) {
  await arguments_assert(list_is, number_is)(arguments);
  list.splice(index, 1);
}
