import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_assert} from "./../m/js/assert.mjs";
import {list_is} from "./is.mjs";
import {list_size} from "./size.mjs";
import {m_js_number_at_least} from "./../m/js/number/at/least.mjs";
export async function list_first(list) {
  await m_js_arguments_assert(list_is)(arguments);
  await m_js_assert(m_js_number_at_least)(await list_size(list), 1);
  return list[0];
}
