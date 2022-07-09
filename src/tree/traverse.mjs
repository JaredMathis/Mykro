import _ from "lodash";
import {m_js_arguments_assert} from "./../m/js/arguments/assert.mjs";
import {m_js_assert} from "./../m/js/assert.mjs";
import {m_js_not} from "./../m/js/not.mjs";
export async function tree_traverse(node, children_get, for_each_child) {
  await m_js_arguments_assert(m_js_not(_.isUndefined), _.isFunction, _.isFunction)(arguments);
  await for_each_child(node);
  let children = await children_get(node);
  m_js_assert(_.isArray)(children);
  for (let child of children) {
    await tree_traverse(child, children_get, for_each_child);
  }
}
