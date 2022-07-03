
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";

export async function list_item_random(list) {
    await arguments_assert(_.isArray)(arguments);

    let index = _.random(list.length)
    console.log(index);
    return list[index];
}