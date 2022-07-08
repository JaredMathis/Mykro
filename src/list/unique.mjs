import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_for_each} from "./../js/for/each.mjs";
import {list_add} from "./add.mjs";
import {list_contains} from "./contains.mjs";
import {list_is} from "./is.mjs";
export async function list_unique(list) {
  await js_arguments_assert(list_is)(arguments);
  let result = [];
  await js_for_each(list, async item => {
    if (!await list_contains(result, item)) {
      await list_add(result, item);
    }
  });
  return result;
}
