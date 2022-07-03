
import { arguments_assert } from "./arguments_assert.mjs";

export async function random_number(min, max) {
    await arguments_assert(number_is, number_is)(arguments);
    return _.random(min, max);
}