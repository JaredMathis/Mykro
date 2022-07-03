
import { arguments_assert } from "./arguments_assert.mjs";

export async function random_with_probability(probability) {
    await arguments_assert(probability_is)(arguments);
    
    return Math.random() <= probability;
}