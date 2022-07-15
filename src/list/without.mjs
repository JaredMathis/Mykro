import {list_is} from "./is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {list_contains} from "./contains.mjs";
import {list_where} from "./where.mjs";
export async function list_without(list, values) {
  await m_js_arguments_assert(list_is, list_is)(arguments);
  return await list_where(list, async item => !await list_contains(values, item));
}
