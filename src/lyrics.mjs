
import { arguments_assert } from "./arguments_assert.mjs";
import { list_item_random } from "./list_item_random.mjs";

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

    let result = await lyrics_sentence_exclamation(group);
    
    return result
}

async function lyrics_sentence_exclamation(group) {
    let { adjectives } = group;
    let { nouns } = group;

    let adjective = await list_item_random(adjectives);
    let noun = await list_item_random(nouns);
    let result = `${adjective} ${noun}!`;
    return result;
}
