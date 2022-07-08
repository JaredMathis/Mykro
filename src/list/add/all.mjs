import {arguments_assert} from "./../../arguments/assert.mjs";
import {for_each} from "./../../for/each.mjs";
import {list_is} from "./../../list_is.mjs";
import {list_add} from "./../add.mjs";
export async function list_add_all(list, other) {
  await arguments_assert(list_is, list_is)(arguments);
  await for_each(other, async o => {
    await list_add(list, o);
  });
  return list;
}
