
import { arguments_assert } from "./arguments_assert.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    return "Amazing grace!";
}