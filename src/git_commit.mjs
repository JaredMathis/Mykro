import { command_line } from "./command_line.mjs";
import { assert } from "./assert.mjs";
import { string_is } from "./string_is.mjs";

export async function git_commit(message) {
    assert(string_is)(message)
    return await command_line(`git commit -m ${message}`)
}