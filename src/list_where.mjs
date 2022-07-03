
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { for_each } from "./for_each.mjs";

export async function list_where(list, predicate) {
    await arguments_assert(_.isArray, _.isFunction)(arguments);
    
    let result = [];
    await for_each(list, async item => {
        if (await predicate(item)) {
            result.push(item);
        }
    })
    return result;
}