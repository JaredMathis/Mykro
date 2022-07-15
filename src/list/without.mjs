import {list_is} from "./is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import { m_js_for_each } from "../m/js/for/each.mjs";
import { list_add } from "./add.mjs";
import { list_contains } from "./contains.mjs";
export async function list_without(list, values) {
  await m_js_arguments_assert(list_is, list_is)(arguments);
  let result = [];
  await m_js_for_each(list, async item => {
    if (await list_contains(list, values)) {
      return;
    }
    await list_add(result, item);
  })
  return result;
}
