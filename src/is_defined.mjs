
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { tautology } from "./tautology.mjs";

export async function is_defined(value) {
    await arguments_assert(tautology)(arguments);
    return !_.isUndefined(value);
}