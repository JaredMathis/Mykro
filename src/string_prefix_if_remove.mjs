import {string_from_list} from './string_from_list.mjs';
import {string_size} from './string_size.mjs';
import {list_starting_at} from './list_starting_at.mjs';
import {string_to_list} from './string_to_list.mjs';
import {string_starts_with} from './string_starts_with.mjs';

import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";

export async function string_prefix_if_remove(s, prefix) {
    await arguments_assert(string_is, string_is)(arguments);
    if (await string_starts_with(s, prefix)) {
        let stdout_as_list = await string_to_list(s);
        let sublist = await list_starting_at(stdout_as_list, await string_size(prefix));
        s = await string_from_list(sublist);
    }
    return s;
}
