import {arguments_assert} from "./../arguments/assert.mjs";
import {list_is} from "./is.mjs";
export async function list_size(list) {
  await arguments_assert(list_is)(arguments);
  return list.length;
}
