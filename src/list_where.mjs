
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";

export async function list_where(list, predicate) {
    await arguments_assert(_.isArray, _.isFunction)(arguments);
    // TODO
}