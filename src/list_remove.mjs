import {arguments_assert} from "./arguments_assert.mjs";
import {list_index_of} from "./list_index_of.mjs";
import {list_is} from "./list_is.mjs";
export async function list_remove(list, item) {
  await arguments_assert(list_is, defined_is)(arguments);
  await list_index_of(list, item);
}
