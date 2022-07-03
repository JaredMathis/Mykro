
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { lyrics_sentence_exclamation } from "./lyrics_sentence_exclamation.mjs";
import { lyrics_sentence_exclamation_sub_how } from "./lyrics_sentence_exclamation_sub_how.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let god_attribute_adjectives = [
        "amazing",
        "unending",
        "endless",
        "sweet",
    ]

    let group2 = {
        adjectives: god_attribute_adjectives,
        nouns: [
            "sound",
        ]
    }

    let group1 = {
        adjectives: god_attribute_adjectives,
        nouns: [
            "grace", 
            "love",
        ],
        sub_groups: [
            group2
        ]
    }

    let groups = [
        group1
    ]

    let group = await list_item_random(groups);

    let sentences_count = 8;

    let result = [];
    for (let i of _.range(0, sentences_count)) {
        let choices = [
            lyrics_sentence_exclamation
        ];

        if (i >= 1) {
            choices.push(lyrics_sentence_exclamation_sub_how);
        }

        let sentence_get = await list_item_random(choices);

        result.push(await sentence_get(group))
    }
    
    return result
}