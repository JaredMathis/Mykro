
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { lyrics_database_get } from "./lyrics_database_get.mjs";
import { lyrics_sentence_exclamation } from "./lyrics_sentence_exclamation.mjs";
import { lyrics_sentence_exclamation_sub_how } from "./lyrics_sentence_exclamation_sub_how.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let database = await lyrics_database_get();

    const groups_about_god = database.groups;
    let group = await list_item_random(groups_about_god);

    let sentences_count = 12;

    let result = await list_map(_.range(0, sentences_count), async i => {
        let choices = [
            lyrics_sentence_exclamation
        ];

        if (i >= 1) {
            choices.push(lyrics_sentence_exclamation_sub_how);
        }

        let sentence_get = await list_item_random(choices);

        let item = await sentence_get(group, database);
        return item;
    });
    
    return result
}