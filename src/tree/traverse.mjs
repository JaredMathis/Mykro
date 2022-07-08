import _ from "lodash";
import {arguments_assert} from "./../arguments/assert.mjs";
import {assert} from "./../assert.mjs";
import {not} from "./../not.mjs";
export async function tree_traverse(node, children_get, for_each_child) {
  await arguments_assert(not(_.isUndefined), _.isFunction, _.isFunction)(arguments);
  await for_each_child(node);
  let children = await children_get(node);
  assert(_.isArray)(children);
  for (let child of children) {
    await tree_traverse(child, children_get, for_each_child);
  }
}
