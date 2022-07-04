
import { arguments_assert } from "./arguments_assert.mjs";
import { constant_alphabet } from "./constant_alphabet.mjs";
import { defined_is } from "./defined_is.mjs";
import { for_each } from "./for_each.mjs";
import { list_index_of } from "./list_index_of.mjs";
import { string_to_list } from "./string_to_list.mjs";

export async function string_identifier_is(value) {
    await arguments_assert(defined_is)(arguments);

    let identifer_characters = await constant_alphabet() + `_`;
    let identifer_characters_as_list = await string_to_list(identifer_characters);
    let value_as_list = await string_to_list(value);

    let result = true;
    await for_each(value_as_list, async v => {
        let index = await list_index_of(identifer_characters_as_list, v)
        if (!index.success) {
            result = false;
            return true;
        }
    })

    return result
}