import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {list_is} from "./is.mjs";
export async function list_size(list) {
  await js_arguments_assert(list_is)(arguments);
  return list.length;
}
