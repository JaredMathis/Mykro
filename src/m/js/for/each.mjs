import {list_is} from "./../../../list/is.mjs";
import {m_js_function_is} from "./../function/is.mjs";
import {m_js_arguments_assert} from "./../arguments/assert.mjs";
import {m_js_defined_is} from "./../defined/is.mjs";
import {m_js_true_is} from "./../true/is.mjs";
export async function m_js_for_each(list, for_each_item) {
  await m_js_arguments_assert(list_is, m_js_function_is)(arguments);
  let index = 0;
  for (let item of list) {
    let result = await for_each_item(item, index);
    if (await m_js_defined_is(result)) {
      if (await m_js_true_is(result)) {
        break;
      }
    }
    index++;
  }
}
