
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { error } from "./error.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { list_where } from "./list_where.mjs";
import { lyrics_group_is_about } from "./lyrics_group_is_about.mjs";
import { random_with_probability } from "./random_with_probability.mjs";
import { string_is } from "./string_is.mjs";
import { tautology } from "./tautology.mjs";

export async function lyrics_that_clause(database, noun) {
    await arguments_assert(tautology, string_is)(arguments);

    let probability_that_clause = 0.5

    let that_clause = "";
    let propositions_for_noun = await list_where(database.propositions, p => p.nouns.includes(noun));
    if (_.some(propositions_for_noun)) {
        if (await random_with_probability(probability_that_clause)) {
            that_clause += " that ";
            let proposition = await list_item_random(propositions_for_noun);
    
            let object_clause = await list_item_random(proposition.objects);

            let probability_object_clause = 0.5
            
            if (await random_with_probability(probability_object_clause)) {
                let groups_for_object_clause = await list_where(database.groups, await lyrics_group_is_about(object_clause));
                if (_.some(groups_for_object_clause)) {
                    let group_for_object_clause = await list_item_random(groups_for_object_clause);
                    if (_.some(group_for_object_clause.objects)) {
                        let group_for_object_clause_noun = await list_item_random(group_for_object_clause.objects);
                        object_clause = `a ${group_for_object_clause_noun} ${await list_item_random(['like', 'as'])} ${object_clause}`;
                    }
                }
            }
            
            let verb = await list_item_random(proposition.verbs)
            that_clause += `${verb} ${object_clause}`;
        }
    }
    return that_clause;
}


