import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {assert} from "./../assert.mjs";
import {defined_is} from "./../defined/is.mjs";
import {list_index_of} from "./index/of.mjs";
import {list_is} from "./is.mjs";
import {list_remove_at} from "./remove/at.mjs";
import {list_remove_try} from "./remove/try.mjs";
import {property_get} from "./../property/get.mjs";
import {js_true_is} from "./../js/true/is.mjs";
export async function list_remove(list, item) {
  await js_arguments_assert(list_is, defined_is)(arguments);
  let result = await list_remove_try(list, item);
  await assert(js_true_is)(await property_get(result, "success"));
  return result;
}
