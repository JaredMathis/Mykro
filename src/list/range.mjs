import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_number_negative_not_is} from "./../m/js/number/negative/not/is.mjs";
import {list_add} from "./add.mjs";
export async function list_range(count) {
  await m_js_arguments_assert(m_js_number_negative_not_is)(arguments);
  let result = [];
  for (let i = 0; i < count; i++) {
    await list_add(result, i);
  }
  return result;
}
