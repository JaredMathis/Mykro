import {arguments_assert} from "./../arguments/assert.mjs";
import {defined_is} from "./../defined/is.mjs";
import {list_is} from "./is.mjs";
export async function list_add(list, item) {
  await arguments_assert(list_is, defined_is)(arguments);
  list.push(item);
}