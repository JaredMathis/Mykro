
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";
import { true_is } from "./true_is.mjs";

export async function for_each(list, for_each_item) {
    await arguments_assert(_.isArray, _.isFunction)(arguments);
    for (let item of list) {
        let result = await for_each_item(item);
        if (defined_is(result)) {
            if (await true_is(result)) {
                break;
            }
        }
    }
}