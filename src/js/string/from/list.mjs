import {list_is} from "./../../../list/is.mjs";
import {js_arguments_assert} from "./../../arguments/assert.mjs";
export async function js_string_from_list(list) {
  await js_arguments_assert(list_is)(arguments);
  return list.join("");
}
