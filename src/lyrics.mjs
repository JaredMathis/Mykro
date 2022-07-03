
import _ from "lodash";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyrics_sentence_exclamation } from "./lyrics_sentence_exclamation.mjs";

export async function lyrics() {
    await arguments_assert()(arguments);

    let group = {
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

    let sentences_max = 100;
    let probability_sentence = .95;

    let result = [];
    for (let i of _.range(0, sentences_max)) {
        let sentence = await lyrics_sentence_exclamation(group);
        result.push(sentence)

        if (_.random() > probability_sentence) {
            break;
        }
    }
    
    return result
}