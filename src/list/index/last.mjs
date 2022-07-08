import {list_is} from "./../is.mjs";
import {arguments_assert} from "./../../arguments/assert.mjs";
import {list_size} from "./../size.mjs";
export async function list_index_last(list) {
  await arguments_assert(list_is)(arguments);
  let size = await list_size(list);
  return size - 1;
}
