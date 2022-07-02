import { command_line } from "./command_line.mjs";

export async function git_add() {
    return await command_line(`git add .`)
}