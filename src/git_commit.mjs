import { command_line } from "./command_line.mjs";

export async function git_commit() {
    return await command_line(`git commit`)
}