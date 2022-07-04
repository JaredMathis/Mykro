
import { arguments_assert } from "./arguments_assert.mjs";
import { assert } from "./assert.mjs";
import { list_is } from "./list_is.mjs";
import { list_size } from "./list_size.mjs";
import { number_at_least } from "./number_at_least.mjs";

export async function list_first(list) {
    await arguments_assert(list_is)(arguments);
    
    await assert(number_at_least)(await list_size(list), 1);
    return list[0];
}