
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { not } from "./not.mjs";
import { tautology } from "./tautology.mjs";

export async function lyrics_sentence_exclamation(group, database) {
    await arguments_assert(not(_.isUndefined), tautology)(arguments);
    let { adjectives } = group;
    let { nouns } = group;

    let adjective = await list_item_random(adjectives);
    let noun = await list_item_random(nouns);
    let result = `${adjective} ${noun}!`;
    return result;
}