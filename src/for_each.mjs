
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";

export async function for_each(list, for_each_item) {
    await arguments_assert(_.isArray, _.isFunction)(arguments);
    for (let item of list) {
        await for_each_item(item);
    }
}