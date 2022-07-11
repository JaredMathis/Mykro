import { list_is } from "../list/is.mjs";
import { m_js_defined_is } from "../m/js/defined/is.mjs";
import { m_js_function_is } from "../m/js/function/is.mjs";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_assert} from "./../m/js/assert.mjs";
export async function tree_traverse(node, children_get, for_each_child) {
  await m_js_arguments_assert(m_js_defined_is, m_js_function_is, m_js_function_is)(arguments);
  await for_each_child(node);
  let children = await children_get(node);
  m_js_assert(list_is)(children);
  for (let child of children) {
    await tree_traverse(child, children_get, for_each_child);
  }
}
