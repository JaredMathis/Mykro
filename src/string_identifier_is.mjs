
import { arguments_assert } from "./arguments_assert.mjs";
import { defined_is } from "./defined_is.mjs";

export async function string_identifier_is(value) {
    await arguments_assert(defined_is)(arguments);

    let identifer_characters = `qwertyuiopasdfghjklzxcvbnm_`;
}