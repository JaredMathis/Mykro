import _ from "lodash";
import {js_arguments_assert} from "./../js/arguments/assert.mjs";
import {js_assert} from "./../js/assert.mjs";
import {js_not} from "./../js/not.mjs";
export async function tree_traverse(node, children_get, for_each_child) {
  await js_arguments_assert(js_not(_.isUndefined), _.isFunction, _.isFunction)(arguments);
  await for_each_child(node);
  let children = await children_get(node);
  js_assert(_.isArray)(children);
  for (let child of children) {
    await tree_traverse(child, children_get, for_each_child);
  }
}
