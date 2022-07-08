import _ from "lodash";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {list_is_not_empty} from "./../is/not/empty.mjs";
export async function list_item_random(list) {
  await js_arguments_assert(list_is_not_empty)(arguments);
  let index = _.random(0, list.length - 1);
  return list[index];
}
