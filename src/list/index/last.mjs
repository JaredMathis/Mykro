import {list_is} from "./../is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {list_size} from "./../size.mjs";
export async function list_index_last(list) {
  await js_arguments_assert(list_is)(arguments);
  let size = await list_size(list);
  return size - 1;
}
