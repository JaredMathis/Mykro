
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";
import { lyrics_sentence_exclamation } from "./lyrics_sentence_exclamation.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let group1 = {
        adjectives: [
            "amazing",
            "unending",
            "endless"
        ],
        nouns: [
            "grace", 
            "love"
        ],
    }

    let group2 = {
        adjectives: [
            "sweet"
        ],
        nouns: [
            "sound"
        ]
    }

    let groups = [
        group1,
        group2
    ]

    let sentences_max = 8;

    let result = [];
    for (let i of _.range(0, sentences_max)) {
        let group = await list_item_random(groups);
        let sentence = await lyrics_sentence_exclamation(group);
        result.push(sentence)
    }
    
    return result
}