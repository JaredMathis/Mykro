
import { arguments_assert } from "./arguments_assert.mjs";
import { constant_alphabet } from "./constant_alphabet.mjs";
import { defined_is } from "./defined_is.mjs";
import { for_each } from "./for_each.mjs";

export async function string_identifier_is(value) {
    await arguments_assert(defined_is)(arguments);

    let identifer_characters = await constant_alphabet() + `_`;

    let result = true;
    await for_each(range(string_size(value)), i => {
    })

    return result
}