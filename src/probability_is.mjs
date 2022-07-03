
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";

export async function probability_is(p) {
    await arguments_assert(not(_.isUndefined))(arguments);
    // TODO
}