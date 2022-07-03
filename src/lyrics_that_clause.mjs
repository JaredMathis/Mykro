
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { string_is } from "./string_is.mjs";
import { tautology } from "./tautology.mjs";

export async function lyrics_that_clause(database, noun) {
    await arguments_assert(tautology, string_is)(arguments);

    let probability_that_clause = 0.5

    let that_clause = "";
    let propositions_for_noun = _.filter(database.propositions, { noun });
    if (_.some(propositions_for_noun)) {
        if (Math.random() < probability_that_clause) {
            that_clause += " that ";
            let proposition = await list_item_random(propositions_for_noun);
    
            const object_clause = proposition.object;
            that_clause += `${proposition.verb} ${object_clause}`;
        }
    }
    return that_clause;
}