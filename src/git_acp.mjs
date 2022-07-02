import { arguments_assert } from "./arguments_assert.mjs";
import { git_add } from "./git_add.mjs";
import { git_commit } from "./git_commit.mjs";
import { git_push } from "./git_push.mjs";
import { string_is } from "./string_is.mjs";


export async function git_acp(message) {
    await arguments_assert(string_is)(arguments)
    for (let command of [
        git_add, 
        () => git_commit(message), 
        git_push
    ]) {
        console.log(command)
        await command();
    }
}