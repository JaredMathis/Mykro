
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_at_least } from "./number_at_least.mjs";

export async function number_negative_not_is(value) {
    await arguments_assert(_.isNumber)(arguments);
    
    return number_at_least(value, 0);
}