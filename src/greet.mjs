
import { arguments_assert } from "./arguments_assert.mjs";

export async function greet() {
    await arguments_assert()(arguments);
    // TODO
}