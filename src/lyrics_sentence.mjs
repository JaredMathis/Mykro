
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { lyrics_that_clause } from "./lyrics_that_clause.mjs";
import { random_with_probability } from "./random_with_probability.mjs";
import { tautology } from "./tautology.mjs";

export async function lyrics_sentence(group, database) {
    await arguments_assert(tautology, tautology)(arguments);

    let { sub_groups } = group;

    let sub_group = await list_item_random(sub_groups);

    let sub_adjective = await list_item_random(sub_group.adjectives);
    let sub_noun = await list_item_random(sub_group.nouns);
    let noun = await list_item_random(group.nouns);
    let adjective = await list_item_random(group.adjectives);

    adjective += ' ';
    if (await random_with_probability(0.5)) {
        adjective = ``;
    }

    let noun_clause = `${adjective}${noun}`;
    let of_clause = ` of ${noun_clause}`;
    if (await random_with_probability(0.5)) {
        of_clause = ``;
    }
    let result;
    if (await random_with_probability(0.5)) {
        result = `how ${sub_adjective} the ${sub_noun}${of_clause}`;
    } else {
        result = noun_clause
    }

    result += await lyrics_that_clause(database, noun);

    return result;
}
