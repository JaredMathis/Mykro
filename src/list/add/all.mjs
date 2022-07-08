import {js_arguments_assert} from "./../../js/arguments/assert.mjs";
import {for_each} from "./../../for/each.mjs";
import {list_is} from "./../is.mjs";
import {list_add} from "./../add.mjs";
export async function list_add_all(list, other) {
  await js_arguments_assert(list_is, list_is)(arguments);
  await for_each(other, async o => {
    await list_add(list, o);
  });
  return list;
}
