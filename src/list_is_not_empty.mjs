
import { arguments_assert } from "./arguments_assert.mjs";
import { list_is } from "./list_is.mjs";
import { number_at_least } from "./number_at_least.mjs";

export async function list_is_not_empty(list) {
    await arguments_assert(list_is)(arguments);
    return number_at_least(list_size(list), 1);
}