import _ from "lodash";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {list_is_not_empty} from "./../is/not/empty.mjs";
export async function list_item_random(list) {
  await m_js_arguments_assert(list_is_not_empty)(arguments);
  let index = _.random(0, list.length - 1);
  return list[index];
}
