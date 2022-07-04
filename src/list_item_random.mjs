import _ from "lodash";
import {arguments_assert} from "./arguments_assert.mjs";
import {list_is_not_empty} from "./list_is_not_empty.mjs";
export async function list_item_random(list) {
  await arguments_assert(list_is_not_empty)(arguments);
  let index = _.random(0, list.length - 1);
  return list[index];
}
