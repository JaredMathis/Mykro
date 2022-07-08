import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_defined_is} from "./../js/defined/is.mjs";
import {list_is} from "./is.mjs";
export async function list_add(list, item) {
  await js_arguments_assert(list_is, js_defined_is)(arguments);
  list.push(item);
}
