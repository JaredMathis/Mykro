
import { arguments_assert } from "./arguments_assert.mjs";
import { list_is } from "./list_is.mjs";

export async function list_first(list) {
    await arguments_assert(list_is)(arguments);
    // TODO
}