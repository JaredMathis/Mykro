
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";

export async function lyrics_sentence_exclamation(group) {
    await arguments_assert(not(_.isUndefined))(arguments);
    let { adjectives } = group;
    let { nouns } = group;

    let adjective = await list_item_random(adjectives);
    let noun = await list_item_random(nouns);
    let result = `${adjective} ${noun}!`;
    return result;
}