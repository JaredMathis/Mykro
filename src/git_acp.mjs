import { git_add } from "./git_add.mjs";
import { git_commit } from "./git_commit.mjs";
import { git_push } from "./git_push.mjs";

export async function git_acp() {
    for (let command in [
        git_add, 
        git_commit, 
        git_push
    ]) {
        await command();
    }
}