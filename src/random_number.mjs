
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_is } from "./number_is.mjs";

export async function random_number(min, max) {
    await arguments_assert(number_is, number_is)(arguments);
    return _.random(min, max);
}