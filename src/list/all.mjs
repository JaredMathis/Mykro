import {m_js_true_is} from "./../m/js/true/is.mjs";
import {list_is} from "./is.mjs";
import {m_js_for_each} from "./../m/js/for/each.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
export async function list_all(list) {
  await m_js_arguments_assert(list_is)(arguments);
  let result = true;
  await m_js_for_each(list, async item => {
    if (!await m_js_true_is(item)) {
      result = false;
      return true;
    }
  });
  return result;
}
