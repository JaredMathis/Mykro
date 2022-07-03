
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let adjectives = ["Amazing"];

    let choice = await list_item_random(adjectives);

    return choice + " grace!";
}