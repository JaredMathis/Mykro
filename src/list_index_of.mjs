
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";
import { list_is } from "./list_is.mjs";

export async function list_index_of(list, item) {
    await arguments_assert(list_is, defined_is)(arguments);
    
    let result = list.indexOf(item);

    return result;
}