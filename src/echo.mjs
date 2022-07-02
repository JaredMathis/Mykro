
import { arguments_assert } from "./arguments_assert.mjs";

export async function echo() {
    await arguments_assert()(arguments);
    // TODO
}