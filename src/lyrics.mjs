
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { lyrics_sentence_exclamation } from "./lyrics_sentence_exclamation.mjs";

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
        let sentence = await lyrics_sentence_exclamation(group);
        result.push(sentence)
    }
    
    return result
}