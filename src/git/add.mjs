import {command_line} from "./../command/line.mjs";
export async function git_add() {
  return await command_line(`git add .`);
}
