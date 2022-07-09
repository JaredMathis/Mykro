import {m_js_arguments_assert} from "./../../m/js/arguments/assert.mjs";
import {m_js_for_each} from "./../../m/js/for/each.mjs";
import {list_is} from "./../is.mjs";
import {list_add} from "./../add.mjs";
export async function list_add_all(list, other) {
  await m_js_arguments_assert(list_is, list_is)(arguments);
  await m_js_for_each(other, async o => {
    await list_add(list, o);
  });
  return list;
}
