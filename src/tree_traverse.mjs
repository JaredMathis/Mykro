
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";

export async function tree_traverse(root, children_get) {
    await arguments_assert(not(_.isUndefined), _.isFunction)(arguments);

    let children = await children_get(root);
}