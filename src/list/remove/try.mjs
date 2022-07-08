import {list_remove_at} from "./at.mjs";
import {property_get} from "./../../property/get.mjs";
import {true_is} from "./../../true/is.mjs";
import {assert} from "./../../assert.mjs";
import {list_index_of} from "./../index/of.mjs";
import {defined_is} from "./../../defined/is.mjs";
import {list_is} from "./../is.mjs";
import {arguments_assert} from "./../../arguments/assert.mjs";
export async function list_remove_try(list, item) {
  await arguments_assert(list_is, defined_is)(arguments);
  let index_of = await list_index_of(list, item);
  const success = await property_get(index_of, "success");
  if (!success) {
    return index_of;
  }
  let index = await property_get(index_of, "index");
  await list_remove_at(list, index);
  return index_of;
}