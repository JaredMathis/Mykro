import {list_remove_at} from "./at.mjs";
import {property_get} from "./../../property/get.mjs";
import {js_true_is} from "./../../js/true/is.mjs";
import {js_assert} from "./../../js/assert.mjs";
import {list_index_of} from "./../index/of.mjs";
import {js_defined_is} from "./../../js/defined/is.mjs";
import {list_is} from "./../is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function list_remove_try(list, item) {
  await js_arguments_assert(list_is, js_defined_is)(arguments);
  let index_of = await list_index_of(list, item);
  const success = await property_get(index_of, "success");
  if (!success) {
    return index_of;
  }
  let index = await property_get(index_of, "index");
  await list_remove_at(list, index);
  return index_of;
}
