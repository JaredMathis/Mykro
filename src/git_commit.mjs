import { command_line } from "./command_line.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { string_is } from "./string_is.mjs";

export async function git_commit(message) {
    arguments_assert(string_is)(arguments);
    
    return await command_line(`git commit -m ${message}`)
}