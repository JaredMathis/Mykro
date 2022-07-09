import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_assert} from "./../m/js/assert.mjs";
import {m_js_equals} from "./../m/js/equals.mjs";
import {list_first} from "./first.mjs";
import {list_is} from "./is.mjs";
import {list_size} from "./size.mjs";
export async function list_single(list) {
  await m_js_arguments_assert(list_is)(arguments);
  await m_js_assert(m_js_equals, {
    list
  })(await list_size(list), 1);
  return await list_first(list);
}
