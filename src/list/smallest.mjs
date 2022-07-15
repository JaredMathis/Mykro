import {list_is} from "./is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
export async function list_smallest(list) {
  await m_js_arguments_assert(list_is)(arguments);
}
