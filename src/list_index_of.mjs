
import { arguments_assert } from "./arguments_assert.mjs";
import { assert } from "./assert.mjs";
import { defined_is } from "./defined_is.mjs";
import { list_is } from "./list_is.mjs";
import { number_negative_not_is } from "./number_negative_not_is.mjs";

export async function list_index_of(list, item) {
    await arguments_assert(list_is, defined_is)(arguments);
    
    let index = list.indexOf(item);

    assert(number_negative_not_is)(index);

    return {
        index,
    };
}