import {arguments_assert} from "./arguments_assert.mjs";
import {for_each} from "./for_each.mjs";
import {list_add} from "./list_add.mjs";
import {list_contains} from "./list_contains.mjs";
import {list_is} from "./list_is.mjs";
export async function list_unique(list) {
  await arguments_assert(list_is)(arguments);
  let result = [];
  await for_each(list, async item => {
    if (!await list_contains(result, item)) {
      await list_add(result, item);
    }
  });
  return result;
}
