import {arguments_assert} from "./arguments_assert.mjs";
import {assert} from "./assert.mjs";
import {defined_is} from "./defined_is.mjs";
import {list_index_of} from "./list_index_of.mjs";
import {list_is} from "./list_is.mjs";
import {list_remove_at} from "./list_remove_at.mjs";
import { list_remove_try } from "./list_remove_try.mjs";
import {property_get} from "./property_get.mjs";
import {true_is} from "./true_is.mjs";
export async function list_remove(list, item) {
  await arguments_assert(list_is, defined_is)(arguments);
  let result = await list_remove_try(list, item);
  await assert(true_is)(await property_get(result, "success"));
  return result;
}
