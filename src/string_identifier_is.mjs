
import { arguments_assert } from "./arguments_assert.mjs";
import { constant_alphabet } from "./constant_alphabet.mjs";
import { defined_is } from "./defined_is.mjs";

export async function string_identifier_is(value) {
    await arguments_assert(defined_is)(arguments);

    let identifer_characters = await constant_alphabet() + `_`;
    return identifer_characters
}