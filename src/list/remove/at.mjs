import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {list_is} from "./../is.mjs";
import {js_number_is} from "./../../js/number/is.mjs";
export async function list_remove_at(list, index) {
  await js_arguments_assert(list_is, js_number_is)(arguments);
  list.splice(index, 1);
}
