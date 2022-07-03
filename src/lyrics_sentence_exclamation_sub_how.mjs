
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { tautology } from "./tautology.mjs";

export async function lyrics_sentence_exclamation_sub_how(group) {
    await arguments_assert(tautology)(arguments);

    let { sub_groups } = group;

    let sub_group = await list_item_random(sub_groups);

    let { adjectives } = sub_group;
    let { nouns } = sub_group;

    let adjective = await list_item_random(adjectives);
    let noun = await list_item_random(nouns);
    let result = `How ${adjective} the ${noun}!`;

    return result;
}