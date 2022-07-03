
import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";
import { tautology } from "./tautology.mjs";

export async function lyrics_that_clause(database, noun) {
    await arguments_assert(tautology, string_is)(arguments);

    let that_clause = "";
    let propositions_for_noun = _.filter(database.propositions, { noun });
    if (_.some(propositions_for_noun)) {
        that_clause += " that ";
        let proposition = await list_item_random(propositions_for_noun);

        that_clause += `${proposition.verb} ${proposition.object}`;
    }
    return that_clause;
}