
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { lyrics_sentence_exclamation } from "./lyrics_sentence_exclamation.mjs";
import { lyrics_sentence_exclamation_sub_how } from "./lyrics_sentence_exclamation_sub_how.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let database = lyrics_database_get();

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

function lyrics_database_get() {
    let god_attribute_adjectives = [
        "abundant",
        "amazing",
        "unending",
        "endless",
    ];

    let group2 = {
        adjectives: [
            "sweet",
            "pleasant"
        ],
        nouns: [
            "sound",
        ]
    };

    let group1 = {
        adjectives: god_attribute_adjectives,
        nouns: [
            "grace",
            "love",
        ],
        sub_groups: [
            group2
        ]
    };

    let group_me = {
        noun: 'me',
        objects: [
            'wretch',
            'me'
        ]
    };

    let propositions = [{
        noun: 'grace',
        verb: 'saved',
        object: 'me',
    }];

    let groups = [
        group1
    ];

    let database = {
        propositions,
        groups,
    };
    return database;
}
