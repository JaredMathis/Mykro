import {list_add_all} from "./add/all.mjs";
import {list_is} from "./is.mjs";
import {m_js_for_each} from "./../m/js/for/each.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
export async function list_join(lists) {
  await m_js_arguments_assert(list_is)(arguments);
  let result = [];
  await m_js_for_each(lists, async list => {
    await list_add_all(result, list);
  });
  return result;
}
