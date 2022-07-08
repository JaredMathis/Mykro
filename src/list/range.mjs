import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_number_negative_not_is} from "./../js/number/negative/not/is.mjs";
import {list_add} from "./add.mjs";
export async function list_range(count) {
  await js_arguments_assert(js_number_negative_not_is)(arguments);
  let result = [];
  for (let i = 0; i < count; i++) {
    await list_add(result, i);
  }
  return result;
}
