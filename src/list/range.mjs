import {arguments_assert} from "./../arguments/assert.mjs";
import {number_negative_not_is} from "./../number/negative/not/is.mjs";
import {list_add} from "./add.mjs";
export async function list_range(count) {
  await arguments_assert(number_negative_not_is)(arguments);
  let result = [];
  for (let i = 0; i < count; i++) {
    await list_add(result, i);
  }
  return result;
}
