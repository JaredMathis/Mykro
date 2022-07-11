import {list_size} from "./../size.mjs";
import {list_is} from "./../is.mjs";
import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
export async function list_max_index(list) {
  await m_js_arguments_assert(list_is)(arguments);
  return await list_size(list) - 1;
}
