import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_for_each} from "./../m/js/for/each.mjs";
import {list_add} from "./add.mjs";
import {list_contains} from "./contains.mjs";
import {list_is} from "./is.mjs";
export async function list_unique(list) {
  await m_js_arguments_assert(list_is)(arguments);
  let result = [];
  await m_js_for_each(list, async item => {
    if (!await list_contains(result, item)) {
      await list_add(result, item);
    }
  });
  return result;
}
