import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {number_negative_not_is} from "./../number/negative/not/is.mjs";
import {list_add} from "./add.mjs";
export async function list_range(count) {
  await js_arguments_assert(number_negative_not_is)(arguments);
  let result = [];
  for (let i = 0; i < count; i++) {
    await list_add(result, i);
  }
  return result;
}
