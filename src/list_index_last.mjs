import {list_is} from "./list_is.mjs";
import {arguments_assert} from "./arguments_assert.mjs";
import {list_size} from "./list_size.mjs";
export async function list_index_last(list) {
  await arguments_assert(list_is)(arguments);
  let size = await list_size(list);
  return size - 1;
}
