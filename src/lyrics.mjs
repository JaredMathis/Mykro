
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

    let probability_sentence = .9;



    let sentence = await lyrics_sentence_exclamation(group);
    
    let result = sentence;
    return result
}