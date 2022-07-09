import {list_is} from "./../is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {list_size} from "./../size.mjs";
export async function list_index_last(list) {
  await m_js_arguments_assert(list_is)(arguments);
  let size = await list_size(list);
  return size - 1;
}
