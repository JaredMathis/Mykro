import {command_line} from './command_line.mjs';

import { arguments_assert } from "./arguments_assert.mjs";

export async function git_merge() {
    await arguments_assert()(arguments);
    return await command_line(`git merge "${merge_from}"`);
}