
import { arguments_assert } from "./arguments_assert.mjs";
import { number_negative_not_is } from "./number_negative_not_is.mjs";
import { list_add } from "./list_add.mjs";

export async function list_range(count) {
    await arguments_assert(number_negative_not_is)(arguments);

    let result = [];
    for (let i = 0; i < count; i++) {
        await list_add(result, i);
    }
    return result;
}