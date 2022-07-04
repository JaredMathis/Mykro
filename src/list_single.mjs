
import { arguments_assert } from "./arguments_assert.mjs";
import { assert } from "./assert.mjs";
import { equals } from "./equals.mjs";
import { list_is } from "./list_is.mjs";
import { list_size } from "./list_size.mjs";

export async function list_single(list) {
    await arguments_assert(list_is)(arguments);

    await assert(equals)(list_size(list), 1);
    return list[0];
}