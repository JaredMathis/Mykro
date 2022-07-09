import {m_js_arguments_assert} from "./../../../m/js/arguments/assert.mjs";
import {list_is} from "./../../is.mjs";
import {m_js_number_at_least} from "./../../../m/js/number/at/least.mjs";
import {list_size} from "./../../size.mjs";
export async function list_is_not_empty(list) {
  await m_js_arguments_assert(list_is)(arguments);
  return m_js_number_at_least(await list_size(list), 1);
}
