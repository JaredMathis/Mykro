
import { arguments_assert } from "./arguments_assert.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let adjectives = ["Amazing"];

    list_item_random(adjectives);

    return "Amazing grace!";
}