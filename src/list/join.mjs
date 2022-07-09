import {list_add_all} from "./add/all.mjs";
import {list_is} from "./is.mjs";
import {js_for_each} from "./../js/for/each.mjs";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
export async function list_join(lists) {
  await js_arguments_assert(list_is)(arguments);
  let result = [];
  await js_for_each(lists, async list => {
    await list_add_all(result, list);
  });
  return result;
}
