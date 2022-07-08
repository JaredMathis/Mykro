import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
import {list_index_of} from "./index/of.mjs";
import {list_is} from "./is.mjs";
export async function list_contains(list, item) {
  await js_arguments_assert(list_is, defined_is)(arguments);
  let index_of = await list_index_of(list, item);
  return index_of.success;
}
