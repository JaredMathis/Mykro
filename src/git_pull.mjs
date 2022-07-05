import {command_line} from './command_line.mjs';

import { arguments_assert } from "./arguments_assert.mjs";

export async function git_pull() {
    await arguments_assert()(arguments);
    return await command_line(`git pull`);
}