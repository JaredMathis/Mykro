import {list_is} from "./../../list/is.mjs";
import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
export async function string_from_list(list) {
  await js_arguments_assert(list_is)(arguments);
  return list.join("");
}
