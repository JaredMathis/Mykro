
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let adjectives = ["amazing", "unending"];
    let nouns = ["grace"]

    let adjective = await list_item_random(adjectives);
    let noun = await list_item_random(nouns);

    return `${adjective} ${noun}!`;
}