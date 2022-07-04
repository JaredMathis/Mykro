import {arguments_assert} from "./arguments_assert.mjs";
import { assert } from "./assert.mjs";
import { defined_is } from "./defined_is.mjs";
import {list_index_of} from "./list_index_of.mjs";
import {list_is} from "./list_is.mjs";
import { property_get } from "./property_get.mjs";
import { true_is } from "./true_is.mjs";
export async function list_remove(list, item) {
  await arguments_assert(list_is, defined_is)(arguments);
  let index_of = await list_index_of(list, item);
  assert(true_is)(await property_get(index_of, 'success'));
  
  let index = await property_get(index_of, 'index')

  list.splice(index, 1);
}
