import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_assert} from "./../js/assert.mjs";
import {js_equals} from "./../js/equals.mjs";
import {list_first} from "./first.mjs";
import {list_is} from "./is.mjs";
import {list_size} from "./size.mjs";
export async function list_single(list) {
  await js_arguments_assert(list_is)(arguments);
  await js_assert(js_equals, {
    list
  })(await list_size(list), 1);
  return await list_first(list);
}
