import {arguments_assert} from "./arguments_assert.mjs";
import { list_index_of } from "./list_index_of.mjs";
export async function list_contains(list, item) {
  await arguments_assert(list_is, defined_is)(arguments);

  let index_of = await list_index_of(list, item)

  return index_of;
}
