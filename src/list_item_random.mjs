
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";

export async function list_item_random(list) {
    await arguments_assert(_.isArray)(arguments);
    let index = _.random(0, list.length - 1)
    return list[index];
}