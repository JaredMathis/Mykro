
import { arguments_assert } from "./arguments_assert.mjs";
import { for_each } from "./for_each.mjs";
import { list_is } from "./list_is.mjs";

export async function list_add_all(list, other) {
    await arguments_assert(list_is, list_is)(arguments);
    
    await for_each(other, o => {
        await list_add(list, o);
    })
}