
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";
import { number_at_most } from "./number_at_most.mjs";
import { number_negative_not_is } from "./number_negative_not_is.mjs";
import { list_where } from "./list_where.mjs";

export async function probability_is(p) {
    await arguments_assert(defined_is)(arguments);
    
    let tests = [
        _.isNumber(p),
        await number_negative_not_is(p),
        await number_at_most(p, 1),
    ];

    return _.some(list_where(tests, false_is));
}