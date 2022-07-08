import {js_arguments_assert} from "./../../../js/arguments/assert.mjs";
import {list_is} from "./../../is.mjs";
import {js_number_at_least} from "./../../../js/number/at/least.mjs";
import {list_size} from "./../../size.mjs";
export async function list_is_not_empty(list) {
  await js_arguments_assert(list_is)(arguments);
  return js_number_at_least(await list_size(list), 1);
}
