import {arguments_assert} from "./../arguments/assert.mjs";
import {assert} from "./../assert.mjs";
import {equals} from "./../equals.mjs";
import {list_first} from "./first.mjs";
import {list_is} from "./is.mjs";
import {list_size} from "./../list_size.mjs";
export async function list_single(list) {
  await arguments_assert(list_is)(arguments);
  await assert(equals)(await list_size(list), 1);
  return await list_first(list);
}
