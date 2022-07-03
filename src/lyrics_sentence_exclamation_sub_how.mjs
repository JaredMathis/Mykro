
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { tautology } from "./tautology.mjs";

export async function lyrics_sentence_exclamation_sub_how(group, database) {
    await arguments_assert(tautology, tautology)(arguments);

    let { sub_groups } = group;

    let sub_group = await list_item_random(sub_groups);

    let sub_adjective = await list_item_random(sub_group.adjectives);
    let sub_noun = await list_item_random(sub_group.nouns);
    let noun = await list_item_random(group.nouns);

    let result = `how ${sub_adjective} the ${sub_noun} (of ${noun})`;

    let propositions_for_noun = _.filter(database.propositions, { noun });
    if (_.some(propositions_for_noun)) {
        result += " that ";
        let proposition = await list_item_random(propositions_for_noun);
        console.error(proposition);
    }


    return result;
}