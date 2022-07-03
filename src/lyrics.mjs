
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { lyrics_database_get } from "./lyrics_database_get.mjs";
import { lyrics_sentence_exclamation } from "./lyrics_sentence_exclamation.mjs";
import { lyrics_sentence_exclamation_sub_how } from "./lyrics_sentence_exclamation_sub_how.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let database = await lyrics_database_get();

    let group = await list_item_random(database.groups);

    let sentences_count = 12;

    let result = [];
    for (let i of _.range(0, sentences_count)) {
        let choices = [
            lyrics_sentence_exclamation
        ];

        if (i >= 1) {
            choices.push(lyrics_sentence_exclamation_sub_how);
        }

        let sentence_get = await list_item_random(choices);

        result.push(await sentence_get(group, database))
    }
    
    return result
}