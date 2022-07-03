
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";
import { number_at_most } from "./number_at_most.mjs";
import { number_negative_not_is } from "./number_negative_not_is.mjs";
import { list_where } from "./list_where.mjs";
import { false_is } from "./false_is.mjs";
import { true_is } from "./true_is.mjs";

export async function probability_is(p) {
    await arguments_assert(defined_is)(arguments);
    
    let tests = [
        _.isNumber(p),
        await number_negative_not_is(p),
        await number_at_most(p, 1),
    ];

    return _.every(list_where(tests, true_is));
}