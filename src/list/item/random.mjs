import { list_size } from "../size.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {list_is_not_empty} from "./../is/not/empty.mjs";
export async function list_item_random(list) {
  await m_js_arguments_assert(list_is_not_empty)(arguments);
  const size = await list_size(list);
  let index = Math.floor(Math.random() * size);
  return list[index];
}
